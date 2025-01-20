import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideClientHydration } from "@angular/platform-browser";
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";

import { errorInterceptor } from "./core/interceptors/error.interceptor";
import { tokenInterceptor } from "./core/interceptors/token.interceptor";

import { routes } from "./app.routes";
import { provideToastr } from "ngx-toastr";
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([errorInterceptor, tokenInterceptor])
    ),
    provideToastr({
      timeOut: 2500,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    })
  ],
};
