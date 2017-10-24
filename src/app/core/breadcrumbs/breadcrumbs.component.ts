import { ApiService } from './../api.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ForumModel } from './../models/forum.model';
import { TopicModel } from './../models/topic.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  @Input() forum: ForumModel;
  @Input() forumId: string;
  @Input() topic: TopicModel;
  forumSub: Subscription;

  constructor(private api: ApiService) { }

  ngOnInit() {
    if (this.forumId) {
      this._getForum();
    }
  }

  private _getForum() {
    this.forumSub = this.api.getForumById$(this.forumId).subscribe(
      data => this.forum = data
    );
  }

  ngOnDestroy() {
    if (this.forumSub) {
      this.forumSub.unsubscribe();
    }
  }

}
