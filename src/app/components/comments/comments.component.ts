import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/_models';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'dk-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{

  @Input('postId') id: number = 1;
  comments:Comment[]=[];

  constructor(private _appService:AppService){}

  ngOnInit(): void {
    this._appService.getComments(this.id).subscribe(comments=>this.comments=comments);
  }

}
