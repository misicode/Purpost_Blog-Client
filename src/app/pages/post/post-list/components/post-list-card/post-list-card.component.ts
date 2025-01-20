import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

import { Post } from "../../../../../core/interfaces/post.interface";

@Component({
  selector: "app-post-list-card",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: "./post-list-card.component.html",
  styleUrl: "./post-list-card.component.scss",
})
export class PostListCardComponent implements OnInit {
  @Input()
  public post!: Post;

  ngOnInit(): void {
    if (!this.post) {
      throw Error("Post is required");
    }
  }
}
