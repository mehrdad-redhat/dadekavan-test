import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/_models';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'dk-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  constructor(private route: ActivatedRoute, private _appService: AppService) {}

  postId: number = 0;
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params)
      this.postId = params['postId'];
      this._appService.getPost(this.postId).subscribe((p) => this.post=p);
    });
  }
}
