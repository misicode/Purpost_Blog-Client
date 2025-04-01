import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeKey = "theme";

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    const currentTheme = this.getTheme();
    const newTheme = (currentTheme === "light") ? "dark" : "light";
    this.setTheme(newTheme);
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

  private loadTheme(): void {
    const currentTheme = this.getTheme();
    this.setTheme(currentTheme);
  }
}
