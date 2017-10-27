import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from './../../../core/utils.service';
import { DatePipe } from '@angular/common';
import { AuthService } from './../../../auth/auth.service';
import { ApiService } from './../../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input, ViewChildren, AfterViewInit } from '@angular/core';
import { PostModel } from './../../../core/models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() topicId: string;
  @ViewChildren('postLoop') postsList;
  postsSub: Subscription;
  posts: PostModel[];
  editing: string;
  error: any;
  deleteSub: Subscription;
  deleteError: any;
  hashSub: Subscription;
  postListSub: Subscription;
  initialScrollPostId: string;
  ngForRendered: boolean;
  latestPostId: string;

  constructor(
    private api: ApiService,
    public auth: AuthService,
    public date: DatePipe,
    public utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this._getPosts();
    this._getHash();
  }

  private _getHash() {
    this.hashSub = this.route.fragment.subscribe(
      fragment => {
        if (fragment && !this.ngForRendered) {
          // only check this if NgFor hasn't rendered yet
          // this means it's the initial load of the page
          // if fragment is found, set initialScrollPostId from
          // pageload's hash; will then scroll AfterViewInit
          this.initialScrollPostId = fragment;
        }
        if (fragment && this.ngForRendered) {
          this.scrollToAnchor(fragment);
        }
      }
    );
  }

  private _getPosts() {
    this.postsSub = this.api.getPostsByTopic$(this.topicId).subscribe(
      data => {
        this.posts = data;
        // detect latest post and store it so it can be scrolled to
        this.latestPostId = this.posts.length ? `post-${this.posts.length - 1}` : null;
      },
      err => this.error = err
    );
  }

  ngAfterViewInit() {
    this.postListSub = this.postsList.changes.subscribe(
      () => {
        // wait for NgFor to render and then scroll to initial hash
        if (this.initialScrollPostId && !this.ngForRendered) {
          this.scrollToAnchor(this.initialScrollPostId);
        }
        this.ngForRendered = true;
      }
    );
  }

  trackPosts(index) {
    return index;
  }

  makeEditObj(postObj: PostModel): PostModel {
    return new PostModel(
      postObj.topic_id,
      postObj.author,
      postObj.post_text,
      postObj.datetime,
      postObj._id
    );
  }

  onSubmitPost(postObj) {
    const updatedPosts = [...this.posts, postObj];
    this.posts = updatedPosts;
  }

  onCancelEdit() {
    this.editing = null;
  }

  onEditPost(postObj, i) {
    Object.assign(this.posts[i], postObj);
    this.editing = null;
  }

  editingThisPost(postId: string): boolean {
    return this.editing === postId;
  }

  editPost(postId: string, i: number) {
    // set editing post _id for API call
    // routerLink directive in template sets fragment
    // to scroll to top of post that's being edited
    this.editing = postId;
  }

  deletePost(id: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this._deletePost(id);
    }
  }

  scrollToAnchor(id: string) {
    const element = document.getElementById(id);
    if (this.ngForRendered) {
      this.postListSub.unsubscribe();
    }
    if (element) {
      const top = element.offsetTop || document.body.clientTop  || 0;
      window.scrollTo(0, top);
    }
  }

  private _deletePost(id: string) {
    this.deleteSub = this.api.deletePost$(id).subscribe(
      data => this._removeDeletedPost(data.id),
      err => this.deleteError = id
    );
  }

  private _removeDeletedPost(id: string) {
    const updatedPosts = this.posts.filter(
      item => item._id !== id
    );
    this.posts = updatedPosts;
    this.deleteError = null;
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.hashSub.unsubscribe();
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
    if (this.postListSub) {
      this.postListSub.unsubscribe();
    }
  }

}
