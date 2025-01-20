import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

import { AuthService } from "../../../core/services/auth/auth.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  private router = inject(Router);
  
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

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
