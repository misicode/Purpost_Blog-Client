import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";
import { FooterComponent } from "./layouts/content-layout/footer/footer.component";
import { HeaderComponent } from "./layouts/content-layout/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
