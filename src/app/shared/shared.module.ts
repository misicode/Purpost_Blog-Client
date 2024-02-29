import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxLoadingModule } from "ngx-loading";

import { LoaderComponent } from "./loader/loader.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  declarations: [
    LoaderComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({}),
  ],
  exports: [
    LoaderComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
