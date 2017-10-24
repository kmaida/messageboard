import { FilterSortService } from './../filter-sort.service';
import { ApiService } from './../api.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TagModel } from './../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {
  @Input() tags: TagModel[];
  @Input() showNew: boolean;
  tagsSub: Subscription;

  constructor(
    private api: ApiService,
    public fs: FilterSortService) { }

  ngOnInit() {
    if (!this.tags) {
      this._getAllTags();
    }
  }

  private _getAllTags() {
    this.tagsSub = this.api.getTags$().subscribe(
      data => this.tags = data
    );
  }

  tagSeparator(isLast: boolean): string {
    return isLast ? '' : ', ';
  }

  ngOnDestroy() {
    if (this.tagsSub) {
      this.tagsSub.unsubscribe();
    }
  }

}
