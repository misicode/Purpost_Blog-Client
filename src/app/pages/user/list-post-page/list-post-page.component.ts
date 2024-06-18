import { Component, OnInit, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { PostService } from "../../../core/services/post.service";

import { Post } from "../../../core/interfaces/post.interface";

@Component({
  selector: "user-list-post-page",
  templateUrl: "./list-post-page.component.html",
  styleUrl: "./list-post-page.component.scss",
})
export class ListPostPageComponent implements OnInit {
  private postService = inject(PostService);
  private toastrService = inject(ToastrService);
  
  public idPost: string = "";
  public isOpen: boolean = false;
  public listPosts: Post[] = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPostByUser("prueba")
      .subscribe((post: Post[]) => this.listPosts = post);
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
