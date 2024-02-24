import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { CreateNewsPageComponent } from "./create-news-page/create-news-page.component";
import { ListNewsPageComponent } from "./list-news-page/list-news-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    CreateNewsPageComponent,
    ListNewsPageComponent,
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
