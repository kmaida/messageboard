import { UtilsService } from './../../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../../core/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ForumModel } from './../../../core/models/forum.model';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.scss']
})
export class ForumsListComponent implements OnInit, OnDestroy {
  forumsSub: Subscription;
  forums: ForumModel[];
  error: any;
  editing: string;
  showForumForm = false;

  constructor(
    private api: ApiService,
    public utils: UtilsService) { }

  ngOnInit() {
    this._getForums();
  }

  private _getForums() {
    this.forumsSub = this.api.getForums$().subscribe(
      data => this.forums = data,
      err => this.error = err
    );
  }

  trackForums(index) {
    return index;
  }

  makeEditObj(forumObj: ForumModel): ForumModel {
    return new ForumModel(forumObj.title, forumObj._id);
  }

  toggleForumForm() {
    this.showForumForm = !this.showForumForm;
  }

  onSubmitForum(forumObj) {
    const updatedForums = [...this.forums, forumObj];
    this.forums = updatedForums;
  }

  onCancelEdit() {
    this.editing = null;
  }

  onEditForum(forumObj, i) {
    Object.assign(this.forums[i], forumObj);
    this.editing = null;
  }

  editingThisForum(forumId: string): boolean {
    return this.editing === forumId;
  }

  editForum(forumId: string) {
    this.editing = forumId;
  }

  ngOnDestroy() {
    this.forumsSub.unsubscribe();
  }

}
