import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  posts: Post[] = [
    { title: 'Desire to learn components', text: 'Still learn in progress', id: 1 },
    // { title: 'I\'am learning angular', text: 'Almost there, right on my way', id: 2 },
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('timeout');
      this.posts[0] = {
        title: 'changed!!!',
        text: 'changed',
        id: 42
      }

    }, 5000)
  }

  updatePosts(postj: Post) {
    this.posts.unshift(postj)
    // console.log('Post', post);
  }

  removePost(id: number) {

    this.posts = this.posts.filter(p => p.id !== id)
  }

}
