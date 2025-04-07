import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { provideToastr } from "ngx-toastr";

import { errorInterceptor } from "./core/interceptors/error.interceptor";
import { mockInterceptor } from "./core/interceptors/mock.interceptor";
import { tokenInterceptor } from "./core/interceptors/token.interceptor";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([errorInterceptor, tokenInterceptor, mockInterceptor])
    ),
    provideToastr({
      timeOut: 2500,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    })
  ],
};
