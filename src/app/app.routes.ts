import { Routes } from "@angular/router";

import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: ContentLayoutComponent,
    children: [
      {
        path: "auth",
        loadChildren: () => import("./pages/auth/auth.routes").then(r => r.authRoutes)
      },
      {
        path: "post",
        loadChildren: () => import("./pages/post/post.routes").then(r => r.postRoutes)
      },
      {
        path: "user",
        loadChildren: () => import("./pages/user/user.routes").then(r => r.userRoutes)
      },
      {
        path: "",
        redirectTo: "post",
        pathMatch: "full",
      }
    ]
  }
];
