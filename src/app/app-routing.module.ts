import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsPage } from './pages/posts/posts.page';
import { PostPage } from './pages/post/post.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    component: PostsPage,
  },
  {
    path: 'posts/:postId',
    component: PostPage,
  },
  {
    path: '**',
    redirectTo: 'posts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
