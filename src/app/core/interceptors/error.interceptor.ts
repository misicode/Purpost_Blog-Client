import { isPlatformBrowser } from "@angular/common";
import { HttpInterceptorFn } from "@angular/common/http";
import { inject, PLATFORM_ID } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { catchError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);
  const platformId = inject(PLATFORM_ID);

  return next(req)
    .pipe(
      catchError((err) => {
        if (isPlatformBrowser(platformId)) {
          if (err.error instanceof ProgressEvent) {
            toastrService.error("Error de conectividad");
          } else {
            toastrService.error("Error genérico", err.error.message);
          }
        }
        
        console.error(err.error);
        throw err;
      })
    );
};
