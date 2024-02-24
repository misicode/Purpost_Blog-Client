import { inject } from "@angular/core";
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from "../services/auth.service";

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  let isAuthenticated: boolean = false;

  authService.authStatus.subscribe({
    next: (authStatus: boolean) => {
      isAuthenticated = authStatus;
    }
  });
  
  if(isAuthenticated) {
    return true;
  }
  
  router.navigateByUrl("/auth/login");
  
  return false;
};
