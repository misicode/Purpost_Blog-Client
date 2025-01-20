import { Component, Input } from "@angular/core";

@Component({
  selector: "app-spinner",
  standalone: true,
  imports: [],
  templateUrl: "./spinner.component.html",
  styleUrl: "./spinner.component.scss",
})
export class SpinnerComponent {
  @Input()
  public show: boolean = false;
}
