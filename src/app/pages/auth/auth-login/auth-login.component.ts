import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../core/services/auth/auth.service";
import { SpinnerComponent } from "../../../shared/spinner/spinner.component";

@Component({
  selector: "app-auth-login",
  standalone: true,
  imports: [
    SpinnerComponent,
    ReactiveFormsModule
  ],
  templateUrl: "./auth-login.component.html",
  styleUrl: "./auth-login.component.scss",
})
export class AuthLoginComponent {
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  public loading: boolean = false;

  public loginForm: FormGroup = this.formBuilder.group({
    account: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  login() {
    const { account, password } = this.loginForm.value;
    this.loading = true;
    
    this.authService.login(account, password)
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl("/user/posts");
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}
