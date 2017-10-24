import { UtilsService } from './core/utils.service';
import { FilterSortService } from './core/filter-sort.service';
import { ApiService } from './core/api.service';
import { AuthService } from './auth/auth.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { HeaderComponent } from './core/header/header.component';
import { TopicComponent } from './pages/topic/topic.component';
import { ForumComponent } from './pages/forum/forum.component';
import { ForumsListComponent } from './pages/home/forums-list/forums-list.component';
import { PostFormComponent } from './pages/topic/post-form/post-form.component';
import { PostsListComponent } from './pages/topic/posts-list/posts-list.component';
import { LoadingComponent } from './core/loading.component';
import { ErrorComponent } from './core/error.component';
import { TopicsListComponent } from './core/topics-list/topics-list.component';
import { ForumFormComponent } from './pages/home/forum-form/forum-form.component';
import { TopicFormComponent } from './pages/topic-form/topic-form.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { TopicTagComponent } from './pages/topic-tag/topic-tag.component';
import { TagsComponent } from './core/tags/tags.component';
import { TagFormComponent } from './pages/tag-form/tag-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    HeaderComponent,
    TopicComponent,
    ForumComponent,
    ForumsListComponent,
    PostFormComponent,
    PostsListComponent,
    LoadingComponent,
    ErrorComponent,
    TopicsListComponent,
    ForumFormComponent,
    TopicFormComponent,
    BreadcrumbsComponent,
    TopicTagComponent,
    TagsComponent,
    TagFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ApiService,
    Title,
    DatePipe,
    FilterSortService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
