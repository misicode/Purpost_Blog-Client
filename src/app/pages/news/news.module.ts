import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPageComponent } from './list-page/list-page.component';

import { NewsRoutingModule } from "./news-routing.module";

@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
})
export class NewsModule {}
