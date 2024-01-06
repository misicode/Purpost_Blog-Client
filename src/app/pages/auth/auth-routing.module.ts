import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SigninPageComponent } from "./signin-page/signin-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";

const routes: Routes = [
  {
    path: "signin",
    component: SigninPageComponent
  },
  {
    path: "signup",
    component: SignupPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AuthRoutingModule {}
