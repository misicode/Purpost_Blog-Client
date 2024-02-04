import { HttpClient } from "@angular/common/http";
import { Injectable, computed, signal } from "@angular/core";
import { Observable, map, tap } from "rxjs";

import { environment } from "../../../environments/environment";

import { AuthStatus } from "../enums/auth.enum";

import { LoginResponse } from "../interfaces/login-response.interface";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly serverUrl: string = environment.serverUrl;

  private _userAuthenticated = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public userAuthenticated = computed(() => this._userAuthenticated);
  public authStatus = computed(() => this._authStatus);

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<LoginResponse>(`${ this.serverUrl }/api/auth/login`, { email, password } )
      .pipe(
        tap( ({ token, user }) => {
          this._userAuthenticated.set(user);
          this._authStatus.set(AuthStatus.authenticated);

          localStorage.setItem("token", token);
          console.log({ user, token })
        }),
        map( () => true )
      );
  }
}
