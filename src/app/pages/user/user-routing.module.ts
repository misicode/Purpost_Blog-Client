import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsPageComponent } from "./news-page/news-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

import { isAuthenticatedGuard } from "../../core/guards/is-authenticated.guard";

const routes: Routes = [
  {
    path: "profile",
    canActivate: [ isAuthenticatedGuard ],
    component: ProfilePageComponent
  },
  {
    path: "news",
    canActivate: [ isAuthenticatedGuard ],
    component: NewsPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
