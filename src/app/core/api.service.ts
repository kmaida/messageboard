import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { ENV } from './env.config';
import { ForumModel } from './models/forum.model';
import { TopicModel } from './models/topic.model';
import { PostModel } from './models/post.model';
import { TagModel } from './models/tag.model';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  // GET list of forums
  getForums$(): Observable<ForumModel[]> {
    return this.http
      .get(`${ENV.BASE_API}forums`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET forum by ID
  getForumById$(id: string): Observable<ForumModel> {
    return this.http
      .get(`${ENV.BASE_API}forum/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET list of topics by forum ID
  getTopicsByForumId$(forumId: string): Observable<TopicModel[]> {
    return this.http
      .get(`${ENV.BASE_API}topics/${forumId}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET list of topics by tag slug
  getTopicsByTag$(slug: string): Observable<TopicModel[]> {
    return this.http
      .get(`${ENV.BASE_API}topics/tag/${slug}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET topic by ID
  getTopicById$(id: string): Observable<TopicModel> {
    return this.http
      .get(`${ENV.BASE_API}topic/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET list of tags
  getTags$(): Observable<TagModel[]> {
    return this.http
      .get(`${ENV.BASE_API}tags`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET tag by slug
  getTagBySlug$(slug: string): Observable<TagModel> {
    return this.http
      .get(`${ENV.BASE_API}tag/${slug}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET all posts in a topic by topic ID
  getPostsByTopic$(topicId: string): Observable<PostModel[]> {
    return this.http
      .get(`${ENV.BASE_API}posts/${topicId}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // POST new forum
  postForum$(forum: ForumModel): Observable<ForumModel> {
    return this.http
      .post(`${ENV.BASE_API}forum`, forum, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // POST new topic
  postTopic$(topic: TopicModel): Observable<TopicModel> {
    return this.http
      .post(`${ENV.BASE_API}topic`, topic, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // POST new tag
  submitTag$(tag: TagModel): Observable<TagModel> {
    return this.http
      .post(`${ENV.BASE_API}tag`, tag, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // PUT existing forum
  editForum$(id: string, forum: ForumModel): Observable<ForumModel> {
    return this.http
      .put(`${ENV.BASE_API}forum/${id}`, forum, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // PUT existing topic
  editTopic$(id: string, topic: TopicModel): Observable<TopicModel> {
    return this.http
      .put(`${ENV.BASE_API}topic/${id}`, topic, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // POST new post
  submitPost$(post: PostModel): Observable<PostModel> {
    return this.http
      .post(`${ENV.BASE_API}post/`, post, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // PUT existing post
  editPost$(id: string, post: PostModel): Observable<PostModel> {
    return this.http
      .put(`${ENV.BASE_API}post/${id}`, post, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // DELETE existing post
  deletePost$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}post/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // DELETE existing topic and all posts
  deleteTopic$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}topic/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // DELETE tag
  deleteTag$(slug: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}tag/${slug}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  private _handleError(err: HttpErrorResponse | any) {
    const error = {
      status: err.status,
      statusText: err.statusText,
      message: err.error || err.message || 'Unable to complete request.'
    };
    const _errMsg = error.message.toLowerCase();
    if (_errMsg && (
      _errMsg.indexOf('no jwt present') > -1 ||
      _errMsg.indexOf('jwt expired') > -1 ||
      _errMsg.indexOf('unauthorizederror') > -1)
    ) {
      this.auth.logout(true);
      this.auth.login();
    }
    return Observable.throw(error);
  }

}
