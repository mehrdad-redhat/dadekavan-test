import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsPage } from './pages/posts/posts.page';
import { PostPage } from './pages/post/post.page';
import { PostCardComponent } from './components/post-card/post-card.component';
import { AuthorCardComponent } from './components/author-card/author-card.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNGModule } from './prime-ng.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UrlInterceptor } from './_interceptors/url.interceptor';
import { AppGateway } from './app.gateway';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostsPage,
    PostPage,
    PostCardComponent,
    AuthorCardComponent,
    CommentsComponent,
    CommentCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimeNGModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
    AppGateway,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
