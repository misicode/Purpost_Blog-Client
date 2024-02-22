import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: "auth-login-page",
  templateUrl: "./login-page.component.html",
})
export class LoginPageComponent {
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  public loading: boolean = false;

  public loginForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  login() {
    const { email, password } = this.loginForm.value;
    this.loading = true;
    
    this.authService.login(email, password)
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl("/user/news");
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}
