import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  public date: Date = new Date();
}
