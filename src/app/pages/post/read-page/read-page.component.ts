import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";

import { Post } from "../../../core/interfaces/post.interface";

import { PostService } from "../../../core/services/post.service";

@Component({
  selector: "news-read-page",
  templateUrl: "./read-page.component.html",
})
export class ReadPageComponent implements OnInit {
  public post?: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.postService.getPostById(id) )
      ).subscribe(
        post => {
          if (!post) return this.router.navigateByUrl("/posts");

          this.post = post;

          return;
        }
      )
  }
}
