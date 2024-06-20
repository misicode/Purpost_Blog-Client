import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, of } from "rxjs";
import { jwtDecode } from "jwt-decode";

import { environment } from "../../../environments/environment";

import { LoginResponse } from "../interfaces/login-response.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _authStatus = new BehaviorSubject<boolean>(false);
  private _authUser = new BehaviorSubject<string | null>(null);

  private readonly serverUrl: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {
    this.isAuthenticated();
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
    this._authUser.next(decodedToken.sub ?? null);
  }

  private setAuthentication(token: string): boolean {
    const decodedToken = jwtDecode(token);

    this._authStatus.next(true);
    this._authUser.next(decodedToken.sub ?? null);
    
    localStorage.setItem("sesion", JSON.stringify({ token }));

    return true;
  }

  checkAuthStatus(): Observable<boolean> {
    const token = localStorage.getItem("token");

    if(!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${ token }`);

    return this.httpClient
      .get<LoginResponse>(`${ this.serverUrl }/api/v1/auth/token`, { headers })
      .pipe(
        map( ({ token }) => this.setAuthentication(token) ),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
  }

  login(account: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<LoginResponse>(`${ this.serverUrl }/api/v1/auth/login`, { account, password } )
      .pipe(
        map( ({ token }) => this.setAuthentication(token) )
      );
  }

  logout() {
    this._authStatus.next(false);
    this._authUser.next(null);

    localStorage.removeItem("sesion");
  }

  get authStatus(): Observable<boolean>{
    return this._authStatus.asObservable();
  }

  get authUser():Observable<string | null>{
    return this._authUser.asObservable();
  }
}
