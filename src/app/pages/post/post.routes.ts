import { Routes } from "@angular/router";

import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";

export const postRoutes: Routes = [
  {
    path: "",
    component: PostListComponent
  },
  {
    path: ":id",
    component: PostDetailComponent
  }
];