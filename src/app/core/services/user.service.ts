import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";

import { News } from "../interfaces/news.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private serverUrl: string = environment.serverUrl;
  
  constructor(private httpClient: HttpClient) {}

  getNewsByUser(): Observable<News[]> {
    return this.httpClient
      .get<News[]>(`${ this.serverUrl }/api/user/news`);
  }
}
