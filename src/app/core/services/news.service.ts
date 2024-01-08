import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { News } from "../interfaces/news.interface";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  private serverUrl: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(`${ this.serverUrl }/api/news`);
  }
}
