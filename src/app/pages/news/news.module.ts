import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { ListPageComponent } from "./list-page/list-page.component";
import { NewsCardComponent } from "./list-page/components/news-card/news-card.component";
import { ReadPageComponent } from "./read-page/read-page.component";

import { NewsRoutingModule } from "./news-routing.module";

@NgModule({
  declarations: [
    ListPageComponent,
    NewsCardComponent,
    ReadPageComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgxSkeletonLoaderModule,
  ],
})
export class NewsModule {}
