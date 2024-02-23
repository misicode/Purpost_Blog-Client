import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";

import { News } from "../interfaces/news.interface";
import { UserProfile } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private serverUrl: string = environment.serverUrl;
  
  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<UserProfile> {
    return this.httpClient
      .get<UserProfile>(`${ this.serverUrl }/api/user/profile`);
  }

  editProfile(user: UserProfile): Observable<UserProfile> {
    return this.httpClient
      .put<UserProfile>(`${ this.serverUrl }/api/user/profile`, user);
  }

  getNewsByUser(): Observable<News[]> {
    return this.httpClient
      .get<News[]>(`${ this.serverUrl }/api/user/news`);
  }
}
