import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";

import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
})
export class AuthModule {}
