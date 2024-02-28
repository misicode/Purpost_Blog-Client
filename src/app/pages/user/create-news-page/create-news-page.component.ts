import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { NewsService } from "../../../core/services/news.service";

@Component({
  selector: "user-create-news-page",
  templateUrl: "./create-news-page.component.html",
})
export class CreateNewsPageComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private toastrService = inject(ToastrService);
  private id = this.activatedRoute.snapshot.paramMap.get("id");
  
  public imageUrl: string = "";
  public newsForm: FormGroup = this.formBuilder.group({
    title: ["", [Validators.required]],
    body: ["", [Validators.required]],
    image: [null, [Validators.required]],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if(inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];

      this.imageUrl = URL.createObjectURL(file);
      this.newsForm.get("image")?.setValue(file);
    }
  }

  ngOnInit(): void {
    if(this.id) {
      this.newsService.getNewsById(this.id).subscribe(
        news => {
          if (!news) return this.router.navigateByUrl("/news");

          this.newsForm = this.formBuilder.group({
            title: [news.title, [Validators.required]],
            body: [news.body, [Validators.required]],
            image: [null],
          });
          this.imageUrl = news.image.url;

          return;
        }
      )
    }
  }

  createNews() {
    if (!this.id) {
      this.newsService.createNews(this.newsForm.value)
        .subscribe({
          next: () => {
            this.toastrService.success("La noticia se creó exitosamente");
            this.router.navigateByUrl("/user/news");
          }
        });
    } else {
      this.updateNews();
    }
  }

  updateNews() {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.newsService.updateNews(id, this.newsForm.value) )
      ).subscribe({
        next: () => {
          this.toastrService.success("La noticia se actualizó exitosamente");
          this.router.navigateByUrl("/user/news");
        }
      });
  }
}
