import { Component } from "@angular/core";

@Component({
  selector: "user-create-news-page",
  templateUrl: "./create-news-page.component.html",
  styleUrl: "./create-news-page.component.scss",
})
export class CreateNewsPageComponent {
  public imageUrl: string = "";

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if(inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.imageUrl = URL.createObjectURL(file);
    }
  }
}
