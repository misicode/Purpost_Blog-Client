import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { PostService } from '../../../core/services/post/post.service';

import { Post } from '../../../core/interfaces/post.interface';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {
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
          if(!post) return this.router.navigateByUrl("/posts");

          this.post = post;

          return;
        }
      )
  }
}
