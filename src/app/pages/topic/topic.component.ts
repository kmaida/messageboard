import { UtilsService } from './../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../core/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TopicModel } from './../../core/models/topic.model';
import { ForumModel } from './../../core/models/forum.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  id: string;
  forumSub: Subscription;
  forum: ForumModel;
  topicSub: Subscription;
  topic: TopicModel;
  error: any;

  constructor(
    private title: Title,
    private api: ApiService,
    private route: ActivatedRoute,
    public utils: UtilsService) { }

  ngOnInit() {
    // Set topic ID from route params and subscribe
    this.routeSub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this._getTopic();
      }
    );
  }

  private _getTopic() {
    this.topicSub = this.api.getTopicById$(this.id).subscribe(
      topic => {
        this.topic = topic;
        this._getForum(topic.forum_id);
        this.title.setTitle(this.topic.title);
      },
      err => {
        this.error = err;
        this.title.setTitle('Topic');
      }
    );
  }

  private _getForum(forumId: string) {
    this.forumSub = this.api.getForumById$(forumId).subscribe(
      forum => this.forum = forum
    );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.topicSub.unsubscribe();
    if (this.forumSub) {
      this.forumSub.unsubscribe();
    }
  }

}
