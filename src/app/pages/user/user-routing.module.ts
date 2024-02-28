import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewsPageComponent } from "./create-news-page/create-news-page.component";
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
    component: CreateNewsPageComponent
  },
  {
    path: "news/:id",
    canActivate: [ isAuthenticatedGuard ],
    component: CreateNewsPageComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
