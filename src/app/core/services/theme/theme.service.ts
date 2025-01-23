import { isPlatformBrowser } from "@angular/common";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private themeKey = "theme";

  toggleTheme(): void {
    if(isPlatformBrowser(this.platformId)) {
      const currentTheme = this.getTheme();
      const newTheme = (currentTheme === "light") ? "dark" : "light";
      this.setTheme(newTheme);
    }
  }

  getTheme(): string {
    return localStorage.getItem(this.themeKey) || "light";
  }

  setTheme(theme: string): void {
    const bodyElement = document.body;

    bodyElement.classList.remove("light", "dark");
    bodyElement.classList.add(theme);

    localStorage.setItem(this.themeKey, theme);
  }
}
