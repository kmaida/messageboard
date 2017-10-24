import { UtilsService } from './../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../core/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TagModel } from './../../core/models/tag.model';

@Component({
  selector: 'app-topic-tag',
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss']
})
export class TopicTagComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  tagSub: Subscription;
  tag: TagModel;
  tagSlug: string;
  error: any;
  deleteSub: Subscription;
  deleting: boolean;
  deleteError: any;

  constructor(
    private api: ApiService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    public utils: UtilsService) { }

  ngOnInit() {
    // Set tag slug from route params and subscribe
    this.routeSub = this.route.params.subscribe(
      params => {
        this.tagSlug = params['slug'];
        this._getTag();
      }
    );
  }

  private _getTag() {
    this.tagSub = this.api.getTagBySlug$(this.tagSlug).subscribe(
      data => {
        this.tag = data;
        this.title.setTitle(`Topics Tagged "${this.tag.tag}"`);
      },
      err => {
        this.error = err;
        this.title.setTitle('Tag');
      }
    );
  }

  deleteTag() {
    if (confirm('Are you sure you want to delete this tag and remove it from all topics?')) {
      this._deleteTag();
    }
  }

  private _deleteTag() {
    this.deleting = true;
    this.deleteSub = this.api.deleteTag$(this.tagSlug).subscribe(
      data => {
        this.deleting = false;
        this.deleteError = null;
        this.router.navigate(['/']);
      },
      err => {
        this.deleting = false;
        this.deleteError = err;
      }
    );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.tagSub.unsubscribe();
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }

}
