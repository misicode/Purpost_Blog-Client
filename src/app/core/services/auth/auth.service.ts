import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { isPlatformBrowser } from "@angular/common";
import { BehaviorSubject, map, Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";

import { LoginResponse } from "../../interfaces/login-response.interface";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _authStatus = new BehaviorSubject<boolean>(false);
  private _authUser = new BehaviorSubject<string>("");
  private httpClient = inject(HttpClient);
  
  private readonly serverUrl = `${environment.serverUrl}/api/v1/auth`;

  constructor() {
    if(isPlatformBrowser(inject(PLATFORM_ID))) {
      this.isAuthenticated();
    }
  }

  private isAuthenticated() {
    const isAuth = localStorage.getItem("sesion") || null;

    if(!isAuth) {
      this.logout();
      return;
    }

    const { token } = JSON.parse(isAuth);

    const decodedToken = jwtDecode(token);

    const isExpired = Math.floor(new Date().getTime() / 1000) >= (decodedToken.exp || 0);
    
    if(isExpired) {
      this.logout();
      return;
    }
    
    this._authStatus.next(true);
    this._authUser.next(decodedToken.sub ?? "");
  }

  private setAuthentication(token: string): boolean {
    const decodedToken = jwtDecode(token);

    this._authStatus.next(true);
    this._authUser.next(decodedToken.sub ?? "");
    
    localStorage.setItem("sesion", JSON.stringify({ token }));

    return true;
  }

  login(account: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<LoginResponse>(`${this.serverUrl}/login`, { account, password })
      .pipe(
        map(({ token }) => 
          this.setAuthentication(token)
        )
      );
  }

  logout(): void {
    this._authStatus.next(false);
    this._authUser.next("");

    localStorage.removeItem("sesion");
  }

  get authStatus(): Observable<boolean> {
    return this._authStatus.asObservable();
  }

  get authUser(): Observable<string> {
    return this._authUser.asObservable();
  }
}
