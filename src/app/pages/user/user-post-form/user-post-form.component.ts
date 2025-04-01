import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Subject, switchMap, takeUntil } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { SpinnerComponent } from "../../../shared/spinner/spinner.component";

import { AuthService } from "../../../core/services/auth/auth.service";
import { PostService } from "../../../core/services/post/post.service";

@Component({
  selector: "app-user-post-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    SpinnerComponent
  ],
  templateUrl: "./user-post-form.component.html",
  styleUrl: "./user-post-form.component.scss"
})
export class UserPostFormComponent implements OnInit, OnDestroy {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private toastrService = inject(ToastrService);
  private postService = inject(PostService);
  private destroy$ = new Subject<void>();
  private activatedRoute = inject(ActivatedRoute);
  private id = this.activatedRoute.snapshot.paramMap.get("id");
  
  public imageUrl: string = "";
  public loading: boolean = false;
  public postForm: FormGroup = this.formBuilder.group({
    title: ["", [Validators.required]],
    body: ["", [Validators.required]],
    image: [null, [Validators.required]],
  });

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if(inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];

      this.imageUrl = URL.createObjectURL(file);
      this.postForm.get("image")?.setValue(file);
    }
  }

  ngOnInit(): void {
    if(this.id) {
      this.loading = true;
      
      this.postService.getPostById(this.id).subscribe(
        post => {
          this.loading = false;

          if (!post) return this.router.navigateByUrl("/post");

          this.postForm = this.formBuilder.group({
            title: [post.title, [Validators.required]],
            body: [post.body, [Validators.required]],
            image: [null],
          });
          
          this.imageUrl = post.image.url;

          return;
        }
      )
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  runPostForm() {
    if(!this.id) {
      this.createPost();
    } else {
      this.updatePost(this.id);
    }
  }

  createPost() {
    this.authService.authUser.pipe(
      switchMap(username => this.postService.createPost({ ...this.postForm.value, username })),
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => {
        this.toastrService.success("La publicación se creó exitosamente");
        this.router.navigateByUrl("/user/posts");
      }
    });
  }

  updatePost(id: string) {
    this.postService.updatePost(id, this.postForm.value)
      .subscribe({
        next: () => {
          this.toastrService.success("La publicación se actualizó exitosamente");
          this.router.navigateByUrl("/user/posts");
        }
      });
  }
}
