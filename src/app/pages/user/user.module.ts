import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { FormNewsPageComponent } from "./form-news-page/form-news-page.component";
import { ListNewsPageComponent } from "./list-news-page/list-news-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

import { SharedModule } from "../../shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    FormNewsPageComponent,
    ListNewsPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
