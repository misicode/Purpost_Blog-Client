import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { Subject, switchMap, takeUntil } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { ModalComponent } from "../../../shared/modal/modal.component";

import { AuthService } from "../../../core/services/auth/auth.service";
import { PostService } from "../../../core/services/post/post.service";

import { Post } from "../../../core/interfaces/post.interface";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-user-posts",
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    NgxSkeletonLoaderModule,
    RouterLink
  ],
  templateUrl: "./user-posts.component.html",
  styleUrl: "./user-posts.component.scss",
})
export class UserPostsComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private postService = inject(PostService);
  private toastrService = inject(ToastrService);
  private destroy$ = new Subject<void>();
  
  public isLoading: boolean = true;
  public isOpen: boolean = false;
  public idPost: string = "";
  public listPosts: Post[] = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPosts() {
    this.authService.authUser.pipe(
      switchMap(username => this.postService.getPostByUser(username)),
      takeUntil(this.destroy$)
    ).subscribe((post: Post[]) => {
      this.listPosts = post;
      this.isLoading = false;
    });
  }

  deletePost() {
    this.postService.deletePost(this.idPost)
      .subscribe(
        msg => {
          this.listPosts = [];
          this.loadPosts();
          
          this.isOpen = false;
          this.toastrService.success(msg);
        }
      );
  }
  
  openModal(id: string) {
    this.idPost = id;
    this.isOpen = true;
  }

  closeModal() {
    this.idPost = "";
    this.isOpen = false;
  }
}
