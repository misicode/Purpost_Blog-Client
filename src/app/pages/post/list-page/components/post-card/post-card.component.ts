import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../../../../../core/interfaces/post.interface";

@Component({
  selector: "list-post-card",
  templateUrl: "./post-card.component.html",
  styleUrl: "./post-card.component.scss",
})
export class PostCardComponent implements OnInit {
  @Input()
  public post!: Post;

  ngOnInit(): void {
    if (!this.post) {
      throw Error("Post is required");
    }
  }
}
