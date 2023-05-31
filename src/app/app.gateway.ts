import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post,Comment,User } from "./_models";

@Injectable()
export class AppGateway{
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('posts')
  }

  getComments() {
    return this.http.get<Comment[]>('comments')
  }

  getUsers() {
    return this.http.get<User[]>('users')
  }
}
