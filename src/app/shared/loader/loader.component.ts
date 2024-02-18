import { Component, Input } from "@angular/core";
import { ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrl: "./loader.component.scss",
})
export class LoaderComponent {
  @Input()
  public show: boolean = false;

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
}
