import { Component, Input } from '@angular/core';
import { User } from 'src/app/_models';

@Component({
  selector: 'dk-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent {
  @Input('data') data:User|undefined = {
    name: '',
    username: '',
    email: '',
    website:''
  };
}
