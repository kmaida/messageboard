import { AuthService } from './../../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../../core/api.service';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { PostModel } from './../../../core/models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnDestroy {
  @Input() topicId: string;
  @Input() editPostObj: PostModel;
  @Input() index: number;
  @Output() submitPost = new EventEmitter<PostModel>();
  @Output() editPost = new EventEmitter<PostModel>();
  @Output() cancelEdit = new EventEmitter<boolean>();
  submitting: boolean;
  submitSub: Subscription;
  editSub: Subscription;
  postForm: PostModel;
  error: any;
  isEdit: boolean;

  constructor(
    private api: ApiService,
    private auth: AuthService) { }

  ngOnInit() {
    this.isEdit = !!this.editPostObj;

    if (this.isEdit) {
      this.postForm = new PostModel(
        this.editPostObj.topic_id,
        this.editPostObj.author,
        this.editPostObj.post_text,
        this.editPostObj.datetime,
        this.editPostObj._id
      );
    } else {
      this._resetPostForm();
    }
  }

  get isOdd(): boolean {
    return ((this.index + 1) % 2) === 1;
  }

  private _resetPostForm() {
    this.postForm = new PostModel(
      this.topicId,
      this.auth.userProfile.name,
      ''
    );
  }

  emitCancelEdit() {
    this.cancelEdit.emit();
  }

  onSubmit() {
    this.submitting = true;

    if (!this.isEdit) {
      this.submitSub = this.api.submitPost$(this.postForm).subscribe(
        post => this._handleSubmitSuccess(post),
        err => this._handleError(err)
      );
    } else {
      this.editSub = this.api.editPost$(this.postForm._id, this.postForm).subscribe(
        post => this._handleEditSuccess(post),
        err => this._handleError(err)
      );
    }
  }

  private _handleSubmitSuccess(res) {
    this.submitPost.emit(res);
    this.error = null;
    this._resetPostForm();
    this.submitting = false;
  }

  private _handleEditSuccess(res) {
    this.editPost.emit(res);
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
