import { Component, Input } from '@angular/core';
import { Post } from 'src/app/_models';

@Component({
  selector: 'dk-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input('data') post: Post = {
    userId: 0,
  id: 0,
  title: 'loading...',
  body: 'loading...'
  };


}
