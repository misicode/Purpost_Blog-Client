import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";

import { environment } from "../../../../environments/environment";

import { Post, PostRequest } from "../../interfaces/post.interface";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private serverUrl = environment.serverUrl;
  private httpClient = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(
        `${this.serverUrl}/api/v1/post`
      );
  }

  getPostById(id: string): Observable<Post | undefined> {
    return this.httpClient
      .get<Post>(
        `${this.serverUrl}/api/v1/post/id/${id}`
      )
      .pipe(
        catchError(() => of(undefined))
      );
  }

  getPostByUser(username: string): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(
        `${this.serverUrl}/api/v1/post/username/${username}`
      );
  }

  createPost(post: PostRequest): Observable<Post> {
    const formPostData: FormData = this.buildFormData(post);

    return this.httpClient
      .post<Post>(
        `${this.serverUrl}/api/v1/post/private`,
        formPostData
      );
  }

  updatePost(id: string, post: PostRequest): Observable<Post> {
    const formPostData: FormData = this.buildFormData(post);
    formPostData.append("idPost", id);

    return this.httpClient
      .put<Post>(
        `${this.serverUrl}/api/v1/post/private`,
        formPostData
      );
  }

  deletePost(id: string): Observable<string> {
    return this.httpClient
      .delete(`${this.serverUrl}/api/v1/post/private/${id}`, {
        responseType: "text",
      });
  }

  private buildFormData(post: PostRequest): FormData {
    const formData = new FormData();
    formData.append("username", post.username);
    formData.append("title", post.title);
    formData.append("body", post.body);

    if(post.image) {
      formData.append("image", post.image);
    }

    return formData;
  }
}
