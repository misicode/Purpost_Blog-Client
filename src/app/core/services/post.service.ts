import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";

import { environment } from "../../../environments/environment";

import { Post, PostRequest } from "../interfaces/post.interface";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private serverUrl: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`${ this.serverUrl }/api/v1/post`);
  }

  getPostById(id: string): Observable<Post | undefined> {
    return this.httpClient
      .get<Post>(`${this.serverUrl}/api/v1/post/id/${id}`)
      .pipe(
        catchError(err => of(undefined))
      );
  }

  getPostByUser(email: string): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`${ this.serverUrl }/api/v1/post/email/${email}`);
  }

  createPost(post: PostRequest): Observable<Post> {
    const formPostData: FormData = new FormData();

    formPostData.append("title", post.title);
    formPostData.append("body", post.body);
    formPostData.append("image", post.image);

    return this.httpClient
      .post<Post>(`${this.serverUrl}/api/v1/post/private`, formPostData);
  }

  updatePost(id: string, post: PostRequest): Observable<Post> {
    const formPostData: FormData = new FormData();

    formPostData.append("title", post.title);
    formPostData.append("body", post.body);
    
    if(post.image) {
      formPostData.append("image", post.image);
    }

    return this.httpClient
      .put<Post>(`${this.serverUrl}/api/v1/post/private`, formPostData);
  }

  deletePost(id: string): Observable<string> {
    return this.httpClient
      .delete(`${this.serverUrl}/api/v1/post/private`, { responseType: "text" });
  }
}
