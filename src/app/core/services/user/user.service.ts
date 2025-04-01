import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment";

import { UserProfile, UserUpdateRequest } from "../../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private serverUrl = environment.serverUrl;
  private httpClient = inject(HttpClient);

  getProfile(username: string): Observable<UserProfile> {
    return this.httpClient
      .get<UserProfile>(
        `${this.serverUrl}/api/v1/user/username/${username}`
      );
  }

  editProfile(user: UserUpdateRequest): Observable<UserProfile> {
    return this.httpClient
      .put<UserProfile>(
        `${this.serverUrl}/api/v1/user/private`,
        user
      );
  }
}
