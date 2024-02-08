import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";
import { FooterComponent } from "./layouts/content-layout/footer/footer.component";
import { HeaderComponent } from "./layouts/content-layout/header/header.component";

import { ErrorInterceptorService } from "./core/interceptors/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { multi: true, provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService }
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
