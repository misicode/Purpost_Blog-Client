import { Component, OnInit, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { switchMap } from "rxjs";

import { PostService } from "../../../core/services/post.service";

import { Post } from "../../../core/interfaces/post.interface";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: "user-list-post-page",
  templateUrl: "./list-post-page.component.html",
  styleUrl: "./list-post-page.component.scss",
})
export class ListPostPageComponent implements OnInit {
  private authService = inject(AuthService);
  private postService = inject(PostService);
  private toastrService = inject(ToastrService);
  
  public isLoading: boolean = true;
  public isOpen: boolean = false;
  public idPost: string = "";
  public listPosts: Post[] = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.authService.authUser.pipe(
      switchMap(username => this.postService.getPostByUser(username))
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
