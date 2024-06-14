import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { FormPostPageComponent } from "./form-post-page/form-post-page.component";
import { ListPostPageComponent } from "./list-post-page/list-post-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

import { SharedModule } from "../../shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    FormPostPageComponent,
    ListPostPageComponent,
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
