import { Routes } from "@angular/router";

import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserPostsComponent } from "./user-posts/user-posts.component";
import { UserPostFormComponent } from "./user-post-form/user-post-form.component";

import { isAuthenticatedGuard } from "../../core/guards/is-authenticated.guard";

export const userRoutes: Routes = [
  {
    path: "profile",
    canActivate: [ isAuthenticatedGuard ],
    component: UserProfileComponent
  },
  {
    path: "posts",
    canActivate: [ isAuthenticatedGuard ],
    component: UserPostsComponent
  },
  {
    path: "posts/create",
    canActivate: [ isAuthenticatedGuard ],
    component: UserPostFormComponent
  },
  {
    path: "posts/:id",
    canActivate: [ isAuthenticatedGuard ],
    component: UserPostFormComponent
  },
];