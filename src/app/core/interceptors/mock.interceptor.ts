import { HttpClient, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { of, switchMap } from "rxjs";

import { environment } from "../../../environments/environment.qa";

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  const http = inject(HttpClient);

  if(!environment.useMock) {
    return next(req);
  }

  const mockMap: Record<string, string> = {
    "/api/v1/post/id/0001": "post1.json",
    "/api/v1/post/id/0002": "post2.json",
    "/api/v1/post": "posts.json",
    "/api/v1/user": "users.json",
  };

  const matched = Object.keys(mockMap).find((path) => req.url.includes(path));

  if(matched) {
    const jsonFile = mockMap[matched];
    
    return http.get(`/data/${jsonFile}`).pipe(
      switchMap((data) =>
        of(
          new HttpResponse({
            status: 200,
            body: data,
          })
        )
      )
    );
  }

  return next(req);
};
