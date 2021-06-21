import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Desire to learn components', text: 'Still learn in progress' },
    { title: 'I\'am learning angular', text: 'Almost there, right on my way', id: 2 },
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
    // console.log('Post', post);

  }

}
