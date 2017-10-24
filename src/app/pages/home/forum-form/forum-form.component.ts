import { UtilsService } from './../../../core/utils.service';
import { ApiService } from './../../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ForumModel } from './../../../core/models/forum.model';

@Component({
  selector: 'app-forum-form',
  templateUrl: './forum-form.component.html',
  styleUrls: ['./forum-form.component.scss']
})
export class ForumFormComponent implements OnInit, OnDestroy {
  @Input() editForumObj: ForumModel;
  @Output() submitForum = new EventEmitter<ForumModel>();
  @Output() editForum = new EventEmitter<ForumModel>();
  @Output() cancelEdit = new EventEmitter<boolean>();
  submitSub: Subscription;
  editSub: Subscription;
  submitting: boolean;
  isEdit: boolean;
  error: any;
  forumForm: ForumModel;

  constructor(
    private api: ApiService,
    public utils: UtilsService) { }

  ngOnInit() {
    this.isEdit = !!this.editForumObj;

    if (this.isEdit) {
      this.forumForm = new ForumModel(this.editForumObj.title, this.editForumObj._id);
    } else {
      this._resetForumForm();
    }
  }

  private _resetForumForm() {
    this.forumForm = new ForumModel('');
  }

  onSubmit() {
    this.submitting = true;

    if (!this.isEdit) {
      this.submitSub = this.api.postForum$(this.forumForm).subscribe(
        data => this._handleSubmitSuccess(data),
        err => this._handleError(err)
      );
    } else {
      this.editSub = this.api.editForum$(this.forumForm._id, this.forumForm).subscribe(
        data => this._handleEditSuccess(data),
        err => this._handleError(err)
      );
    }
  }

  emitCancelEdit() {
    this.cancelEdit.emit();
  }

  private _handleSubmitSuccess(res) {
    this.submitForum.emit(res);
    this.error = null;
    this._resetForumForm();
    this.submitting = false;
  }

  private _handleEditSuccess(res) {
    this.editForum.emit(res);
    this.error = false;
    this.submitting = false;
  }

  private _handleError(err) {
    console.error(err);
    this.submitting = false;
    this.error = err;
  }

  ngOnDestroy() {
    if (this.submitSub) {
      this.submitSub.unsubscribe();
    }
    if (this.editSub) {
      this.editSub.unsubscribe();
    }
  }

}
