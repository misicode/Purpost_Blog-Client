import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { jwtDecode } from "jwt-decode";

import { environment } from "../../../environments/environment";

import { LoginResponse } from "../interfaces/login-response.interface";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _authStatus = new BehaviorSubject<boolean>(false);
  private _authUser = new BehaviorSubject<LoginResponse | null>(null);

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

    const { user, token } = JSON.parse(isAuth);

    const decodedToken = jwtDecode(token);

    const isExpired = Math.floor(new Date().getTime() / 1000) >= (decodedToken.exp || 0);
    
    if(isExpired) {
      this.logout();
      return;
    }
    
    this._authStatus.next(true);
    this._authUser.next({ user, token });
  }

  private setAuthentication(user: User, token: string): boolean {
    this._authStatus.next(true);
    this._authUser.next({ user, token });
    
    localStorage.setItem("sesion", JSON.stringify({ user, token }));

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
      .get<LoginResponse>(`${ this.serverUrl }/api/auth/token`, { headers })
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token) ),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<LoginResponse>(`${ this.serverUrl }/api/auth/login`, { email, password } )
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token) )
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

  get authUser():Observable<LoginResponse | null>{
    return this._authUser.asObservable();
  }
}
