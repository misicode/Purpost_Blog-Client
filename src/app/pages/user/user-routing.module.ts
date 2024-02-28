import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormNewsPageComponent } from "./form-news-page/form-news-page.component";
import { ListNewsPageComponent } from "./list-news-page/list-news-page.component";
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
    component: ListNewsPageComponent
  },
  {
    path: "news/create",
    canActivate: [ isAuthenticatedGuard ],
    component: FormNewsPageComponent
  },
  {
    path: "news/:id",
    canActivate: [ isAuthenticatedGuard ],
    component: FormNewsPageComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
