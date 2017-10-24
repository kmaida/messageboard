import { UtilsService } from './../../core/utils.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../core/api.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ForumModel } from './../../core/models/forum.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  id: string;
  forumSub: Subscription;
  forum: ForumModel;
  error: any;

  constructor(
    private title: Title,
    private api: ApiService,
    private route: ActivatedRoute,
    public utils: UtilsService) { }

    ngOnInit() {
      // Set forum ID from route params and subscribe
      this.routeSub = this.route.params.subscribe(
        params => {
          this.id = params['id'];
          this._getForum();
        }
      );
    }

    private _getForum() {
      this.forumSub = this.api.getForumById$(this.id).subscribe(
        data => {
          this.forum = data;
          this.title.setTitle(data.title);
        },
        err => {
          this.error = err;
          this.title.setTitle('Forum');
        }
      );
    }

  ngOnDestroy() {
    this.forumSub.unsubscribe();
  }

}
