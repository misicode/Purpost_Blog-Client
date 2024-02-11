import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewsPageComponent } from "./news-page/news-page.component";

import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
})
export class UserModule {}
