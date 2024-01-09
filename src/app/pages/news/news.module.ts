import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPageComponent } from './list-page/list-page.component';

import { NewsRoutingModule } from "./news-routing.module";
import { NewsCardComponent } from './list-page/components/news-card/news-card.component';

@NgModule({
  declarations: [
    ListPageComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
})
export class NewsModule {}
