import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { UtilsService } from './../../core/utils.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../core/api.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { TopicModel } from './../../core/models/topic.model';
import { TagModel } from './../../core/models/tag.model';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  forumId: string; // will only be available in URL if creating new
  topicId: string; // will only be available in URL if editing
  topicSub: Subscription;
  deleteSub: Subscription;
  deleting: boolean;
  deleteError: any;
  error: any;
  pageTitle: string;
  originalTopic: TopicModel;
  topicForm: TopicModel;
  tags: TagModel[];
  tagsSub: Subscription;
  tagMap = {};
  submitSub: Subscription;
  submitting: boolean;

  constructor(
    private title: Title,
    private api: ApiService,
    private route: ActivatedRoute,
    public utils: UtilsService,
    private router: Router) { }

  ngOnInit() {
    // Set ID from route params and subscribe
    this.routeSub = this.route.params.subscribe(
      params => {
        if (params) {
          if (!this.isEdit) {
            // new post
            this.forumId = params['id'];
            this.title.setTitle('Create a New Topic');
          } else {
            this.topicId = params['id'];
            this._getTopicAndTags();
          }
        }
        this.pageTitle = this.isEdit ? 'Edit Topic' : 'Create a New Topic';
        this.title.setTitle(this.pageTitle);
      }
    );

    // Get all available tags from API
    if (!this.isEdit) {
      this._getTags();
    }
  }

  get isEdit(): boolean {
    return !(this.route.snapshot.url[0].path === 'forum');
  }

  private _getTags() {
    this.tagsSub = this.api.getTags$().subscribe(
      data => {
        this.tags = data;
        this.topicForm = new TopicModel(
          '',
          this.forumId,
          false,
          []
        );
      },
      err => this.error = err
    );
  }

  private _createTagMap() {
    // defines all currently existing tags for the map
    // only call if isEdit, otherwise map should be empty
    this.topicForm.tags.forEach(
      tagObj => {
        this.tagMap[tagObj.slug] = true;
      }
    );
  }

  private _getTopicAndTags() {
    const getTopic$ = this.api.getTopicById$(this.topicId);
    const getTags$ = this.api.getTags$();

    this.topicSub = Observable.forkJoin(getTopic$, getTags$).subscribe(
      data => {
        this.originalTopic = data[0];
        this.tags = data[1];
        this.topicForm = new TopicModel(
          this.originalTopic.title,
          this.originalTopic.forum_id,
          this.originalTopic.sticky,
          this.originalTopic.tags || [],
          this.originalTopic._id
        );
        this._createTagMap();
      },
      err => this.error = err
    );
  }

  trackTags(index, item) {
    return item._id;
  }

  updateTagMap(tagSlug: string) {
    const _tagOn = this.tagMap[tagSlug];

    if (!_tagOn) {
      this.tagMap[tagSlug] = true;
    } else {
      this.tagMap[tagSlug] = false;
    }
  }

  onSubmit() {
    this.submitting = true;
    this._addSelectedTags();
    this._submitData();
  }

  private _addSelectedTags() {
    const _submitTagSlugs = [];

    for (const key in this.tagMap) {
      if (this.tagMap.hasOwnProperty(key)) {
        if (this.tagMap[key]) {
          _submitTagSlugs.push(key);
        }
      }
    }
    const submitTags = this.tags.filter(
      tagObj => {
        if (_submitTagSlugs.indexOf(tagObj.slug) > -1) {
          return tagObj;
        }
      }
    );
    this.topicForm.tags = submitTags;
  }

  private _submitData() {
    if (!this.isEdit) {
      this.submitSub = this.api.postTopic$(this.topicForm).subscribe(
        data => this._handleSubmitSuccess(data),
        err => this._handleSubmitError(err)
      );
    } else {
      this.submitSub = this.api.editTopic$(this.topicId, this.topicForm).subscribe(
        data => this._handleSubmitSuccess(data),
        err => this._handleSubmitError(err)
      );
    }
  }

  private _handleSubmitSuccess(res) {
    this.submitting = false;
    this.error = null;
    this.router.navigate(['/topic', res._id]);
  }

  private _handleSubmitError(err) {
    this.submitting = false;
    this.error = err;
  }

  deleteTopic() {
    if (confirm('Are you sure you want to delete this topic and all its posts?')) {
      this._deleteTopic();
    }
  }

  private _deleteTopic() {
    this.deleting = true;
    this.deleteSub = this.api.deleteTopic$(this.topicId).subscribe(
      data => {
        this.deleting = false;
        this.error = null;
        this.router.navigate(['/forum', this.topicForm.forum_id]);
      },
      err => {
        this.deleteError = err;
        this.deleting = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.tagsSub) {
      this.tagsSub.unsubscribe();
    }
    if (this.topicSub) {
      this.topicSub.unsubscribe();
    }
  }

}
