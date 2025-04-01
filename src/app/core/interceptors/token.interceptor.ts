import { HttpInterceptorFn } from "@angular/common/http";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const sesion = localStorage.getItem("sesion") || null;

  if(sesion) {
    const { _, token } = JSON.parse(sesion);

    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(tokenReq);
  }

  return next(req);
};
