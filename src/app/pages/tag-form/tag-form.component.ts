import { UtilsService } from './../../core/utils.service';
import { ApiService } from './../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TagModel } from './../../core/models/tag.model';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit, OnDestroy {
  tagForm = new TagModel('', '');
  submitSub: Subscription;
  submitting: boolean;
  error: any;
  success: string;

  constructor(
    private api: ApiService,
    public utils: UtilsService) { }

  ngOnInit() {
  }

  private _createSlug(text: string): string {
    const a = 'ãàáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');

    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(p, c =>
          b.charAt(a.indexOf(c)))     // Replace special chars
      .replace(/&/g, '-and-')         // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  onSubmit() {
    this.tagForm.slug = this._createSlug(this.tagForm.tag);

    this.submitSub = this.api.submitTag$(this.tagForm).subscribe(
      data => this._handleSubmitSuccess(data),
      err => this._handleSubmitError(err)
    );
  }

  private _handleSubmitSuccess(res) {
    this.submitting = false;
    this.error = null;
    this.success = res.tag;
    this.tagForm = new TagModel('', '');
  }

  private _handleSubmitError(err) {
    this.submitting = false;
    this.success = null;
    this.error = err;
  }

  ngOnDestroy() {
    if (this.submitSub) {
      this.submitSub.unsubscribe();
    }
  }

}
