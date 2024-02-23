import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { NewsPageComponent } from "./news-page/news-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    NewsPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
