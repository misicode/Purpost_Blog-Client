import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { NewsService } from "../../../core/services/news.service";

@Component({
  selector: "user-create-news-page",
  templateUrl: "./create-news-page.component.html",
  styleUrl: "./create-news-page.component.scss",
})
export class CreateNewsPageComponent {
  private formBuilder = inject(FormBuilder);
  private toastrService = inject(ToastrService);
  
  public imageUrl: string = "";
  public newsForm: FormGroup = this.formBuilder.group({
    title: ["", [Validators.required]],
    body: ["", [Validators.required]],
    image: [null, [Validators.required]],
  });

  constructor(
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

  createNews() {
    this.newsService.createNews(this.newsForm.value)
      .subscribe({
        next: (res) => {
          this.toastrService.success("La noticia se creó exitosamente");
        }
      });
  }
}
