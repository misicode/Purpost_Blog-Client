import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninPageComponent } from "./signin-page/signin-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";

import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    SigninPageComponent,
    SignupPageComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
})
export class AuthModule {}
