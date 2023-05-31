import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post,Comment } from "./_models";
import { BehaviorSubject, Observable } from 'rxjs';
import { AppGateway } from "./app.gateway";
import { map } from 'rxjs/operators';

@Injectable()
export class AppService{
  constructor(private appGateway: AppGateway) { }

  private _desiredPosts = new BehaviorSubject<Post[]>([]);
  private _comments = new BehaviorSubject<Comment[]>([]);

  getPosts() {
    this.appGateway.getPosts().subscribe({
      next:posts => {
        this.appGateway.getUsers().subscribe({
          next: users => {
            posts.forEach(post => {
              let user = users.find(u => u.id === post.userId)
              post.user = user;
            })
            this._desiredPosts.next(posts);
          },
            error:err=>console.error(err)
        }
        )
      },
      error:err=>console.error(err)
    })
  }

  getDesiredPosts() {
    return this._desiredPosts.asObservable()
  }


  getPost(id: number):Observable<Post> {
    return this._desiredPosts.pipe(
      map(posts => {
        let post:Post= {
          userId: 0,
          id: 0,
          title: '',
          body: '',
        };
        posts.forEach(p => {
          if(p.id==id) post=p
        })
        return post
      })
    )
  }

  getComments(postId: number) {
    this.appGateway.getComments().subscribe(
      comments => {
        let desiredComments: Comment[] = comments.filter(cmnts => cmnts.postId === postId);
        this._comments.next(desiredComments);
      }
    )

    return this._comments.asObservable();
  }

}
