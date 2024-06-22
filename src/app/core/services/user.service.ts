import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";

import { UserProfile } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private serverUrl: string = environment.serverUrl;
  
  constructor(private httpClient: HttpClient) {}

  getProfile(username: string): Observable<UserProfile> {
    return this.httpClient
      .get<UserProfile>(`${ this.serverUrl }/api/v1/user/username/${ username }`);
  }

  editProfile(user: UserProfile): Observable<UserProfile> {
    return this.httpClient
      .put<UserProfile>(`${ this.serverUrl }/api/v1/user/private`, user);
  }
}
