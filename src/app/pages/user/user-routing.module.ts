import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormPostPageComponent } from "./form-post-page/form-post-page.component";
import { ListPostPageComponent } from "./list-post-page/list-post-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

import { isAuthenticatedGuard } from "../../core/guards/is-authenticated.guard";

const routes: Routes = [
  {
    path: "profile",
    canActivate: [ isAuthenticatedGuard ],
    component: ProfilePageComponent
  },
  {
    path: "post",
    canActivate: [ isAuthenticatedGuard ],
    component: ListPostPageComponent
  },
  {
    path: "post/create",
    canActivate: [ isAuthenticatedGuard ],
    component: FormPostPageComponent
  },
  {
    path: "post/:id",
    canActivate: [ isAuthenticatedGuard ],
    component: FormPostPageComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
