import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, computed, signal } from "@angular/core";
import { Observable, catchError, map, of, tap } from "rxjs";

import { environment } from "../../../environments/environment";

import { AuthStatus } from "../enums/auth.enum";

import { LoginResponse } from "../interfaces/login-response.interface";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly serverUrl: string = environment.serverUrl;

  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  private _userAuthenticated = signal<User | null>(null);
  
  public authStatus = computed(() => this._authStatus());
  public userAuthenticated = computed(() => this._userAuthenticated());

  constructor(private httpClient: HttpClient) {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._authStatus.set(AuthStatus.authenticated);
    this._userAuthenticated.set(user);
    
    localStorage.setItem("token", token);

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
    this._authStatus.set(AuthStatus.notAuthenticated);
    this._userAuthenticated.set(null);

    localStorage.removeItem("token");
  }
}
