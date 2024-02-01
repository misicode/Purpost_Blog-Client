import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";

import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly serverUrl: string = environment.serverUrl;
  private userAuthenticated = signal<User | null>(null);
  private authStatus = signal<AuthStatus>();

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<User>(`${ this.serverUrl }/api/auth/login`)
      .pipe();
  }
}
