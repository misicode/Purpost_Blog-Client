import { Component, effect, inject } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./core/services/auth.service";

import { AuthStatus } from "./core/enums/auth.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  public authStatusChangedEffect = effect(() => {
    switch(this.authService.authStatus()) {
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl("/user/news");
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl("/auth/login");
        return;
    }
  });
}
