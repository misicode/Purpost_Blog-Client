import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { NewsPageComponent } from "./news-page/news-page.component";

import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxSkeletonLoaderModule,
  ],
})
export class UserModule {}
