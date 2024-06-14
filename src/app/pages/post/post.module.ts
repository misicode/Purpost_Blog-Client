import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { ListPageComponent } from "./list-page/list-page.component";
import { PostCardComponent } from "./list-page/components/post-card/post-card.component";
import { ReadPageComponent } from "./read-page/read-page.component";

import { PostRoutingModule } from "./post-routing.module";

@NgModule({
  declarations: [
    ListPageComponent,
    PostCardComponent,
    ReadPageComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    NgxSkeletonLoaderModule,
  ],
})
export class PostModule {}
