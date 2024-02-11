import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";

const routes: Routes = [
  {
    path: "",
    component: ContentLayoutComponent,
    children: [
      {
        path: "auth",
        loadChildren: () => import("./pages/auth/auth.module").then(m => m.AuthModule)
      },
      {
        path: "news",
        loadChildren: () => import("./pages/news/news.module").then(m => m.NewsModule)
      },
      {
        path: "user",
        loadChildren: () => import("./pages/user/user.module").then(m => m.UserModule)
      },
      {
        path: "",
        redirectTo: "news",
        pathMatch: "full",
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
