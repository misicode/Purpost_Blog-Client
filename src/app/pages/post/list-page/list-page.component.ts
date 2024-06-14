import { Component, OnInit } from "@angular/core";

import { Post } from "../../../core/interfaces/post.interface";

import { PostService } from "../../../core/services/post.service";

@Component({
  selector: "news-list-page",
  templateUrl: "./list-page.component.html",
})
export class ListPageComponent implements OnInit {
  public listPosts: Post[] = [];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => this.listPosts = posts);
  }
}
