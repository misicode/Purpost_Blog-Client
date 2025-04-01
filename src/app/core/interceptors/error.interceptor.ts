import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { catchError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);

  return next(req)
    .pipe(
      catchError((err) => {
        if (err.error instanceof ProgressEvent) {
          toastrService.error("Error de conectividad");
        } else {
          toastrService.error("Error genérico", err.error.message);
        }
        
        console.error(err.error);
        throw err;
      })
    );
};
