import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, catchError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ErrorInterceptorService implements HttpInterceptor {
  private toastrService = inject(ToastrService);

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req)
        .pipe(
          catchError((err) => {
            if(err.error instanceof ProgressEvent) {
              this.toastrService.error("Error de conectividad");
            } else {
              this.toastrService.error(err.error.message);
            }

            console.error(err.error);
            
            throw err;
          })
        );
  }
}