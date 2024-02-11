import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: "auth-login-page",
  templateUrl: "./login-page.component.html",
})
export class LoginPageComponent {
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  public loginForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  login() {
    const { email, password } = this.loginForm.value;
    
    this.authService.login(email, password)
      .subscribe({
        next: () => console.log("Todo bien!")
      });
  }
}
