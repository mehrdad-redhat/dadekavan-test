import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'dk-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  constructor(private _appService: AppService) {}

  posts: Post[] = [];

  ngOnInit(): void {
    this._appService
      .getDesiredPosts()
      .subscribe((posts) => (this.posts = posts));
  }
}
