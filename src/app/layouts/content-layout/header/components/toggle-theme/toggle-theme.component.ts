import { Component, inject } from "@angular/core";

import { ThemeService } from "../../../../../core/services/theme/theme.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-toggle-theme",
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: "./toggle-theme.component.html",
  styleUrl: "./toggle-theme.component.scss",
})
export class ToggleThemeComponent {
  private themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
