import { TagFormComponent } from './pages/tag-form/tag-form.component';
import { TopicTagComponent } from './pages/topic-tag/topic-tag.component';
import { TopicFormComponent } from './pages/topic-form/topic-form.component';
import { ForumComponent } from './pages/forum/forum.component';
import { TopicComponent } from './pages/topic/topic.component';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './pages/callback/callback.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'forum/:id',
    component: ForumComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'forum/:id/topic/new',
    component: TopicFormComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'topic/:id',
    component: TopicComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'topic/:id/edit',
    component: TopicFormComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'topics/tag/:slug',
    component: TopicTagComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'tag/new',
    component: TagFormComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
