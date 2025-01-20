import { Component, OnInit } from "@angular/core";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { PostListCardComponent } from "./components/post-list-card/post-list-card.component";

import { PostService } from "../../../core/services/post/post.service";

import { Post } from "../../../core/interfaces/post.interface";

@Component({
  selector: "app-post-list",
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule,
    PostListCardComponent
  ],
  templateUrl: "./post-list.component.html",
  styleUrl: "./post-list.component.scss",
})
export class PostListComponent implements OnInit {
  public listPosts: Post[] = [];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => this.listPosts = posts);
  }
}
