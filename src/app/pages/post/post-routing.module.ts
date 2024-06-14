import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListPageComponent } from "./list-page/list-page.component";
import { ReadPageComponent } from "./read-page/read-page.component";

const routes: Routes = [
  {
    path: "",
    component: ListPageComponent
  },
  {
    path: ":id",
    component: ReadPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PostRoutingModule {}
