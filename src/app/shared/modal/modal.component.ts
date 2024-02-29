import { Component, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
})
export class ModalComponent {
  @Input()
  public show: boolean = false;
}
