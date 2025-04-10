import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ToggleThemeComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  
  public isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.authService.authStatus.subscribe({
      next: (authStatus: boolean) => {
        this.isAuthenticated = authStatus;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
