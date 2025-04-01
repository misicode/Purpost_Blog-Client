import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { map, take } from "rxjs";

import { AuthService } from "../services/auth/auth.service";

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authStatus.pipe(
    take(1),
    map(isAuthenticated => {
      if(!isAuthenticated) {
        router.navigate(["/auth/login"]);
        return false;
      }
      return true;
    })
  );
};
