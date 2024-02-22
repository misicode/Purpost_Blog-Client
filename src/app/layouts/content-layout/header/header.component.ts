import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  public isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.authService.authStatus.subscribe({
      next: (authStatus: boolean) => {
        this.isAuthenticated = authStatus;
      }
    });
  }
}
