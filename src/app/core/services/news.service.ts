import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";

import { environment } from "../../../environments/environment";

import { News, NewsRequest } from "../interfaces/news.interface";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  private serverUrl: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.httpClient
      .get<News[]>(`${ this.serverUrl }/api/news`);
  }

  getNewsById(id: string): Observable<News | undefined> {
    return this.httpClient
      .get<News>(`${this.serverUrl}/api/news/${id}`)
      .pipe(
        catchError(err => of(undefined))
      );
  }

  getNewsByUser(): Observable<News[]> {
    return this.httpClient
      .get<News[]>(`${ this.serverUrl }/api/user/news`);
  }

  createNews(news: NewsRequest): Observable<News> {
    const formNewsData: FormData = new FormData();

    formNewsData.append("title", news.title);
    formNewsData.append("body", news.body);
    formNewsData.append("image", news.image);

    return this.httpClient
      .post<News>(`${this.serverUrl}/api/user/news`, formNewsData);
  }
}
