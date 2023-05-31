import { Component, Input } from '@angular/core';

@Component({
  selector: 'dk-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {

  @Input('data') data = {
    name: '',
    body:''
  };

}
