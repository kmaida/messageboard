import { FilterSortService } from './../filter-sort.service';
import { UtilsService } from './../utils.service';
import { ApiService } from './../api.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TopicModel } from './../../core/models/topic.model';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit, OnDestroy {
  @Input() forumId: string;
  @Input() tagSlug: string;
  topicsSub: Subscription;
  topics: TopicModel[];
  error: any;

  constructor(
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService) { }

  ngOnInit() {
    this._getTopics();
  }

  private _getTopics() {
    if (this.forumId) {
      this.topicsSub = this.api.getTopicsByForumId$(this.forumId).subscribe(
        data => this.topics = data.reverse(),
        err => this.error = err
      );
    } else if (this.tagSlug) {
      this.topicsSub = this.api.getTopicsByTag$(this.tagSlug).subscribe(
        data => this.topics = data,
        err => this.error = err
      );
    }
  }

  ngOnDestroy() {
    this.topicsSub.unsubscribe();
  }

}
