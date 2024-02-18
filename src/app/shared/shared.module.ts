import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader/loader.component";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({}),
  ],
  exports: [
    LoaderComponent
  ],
})
export class SharedModule {}
