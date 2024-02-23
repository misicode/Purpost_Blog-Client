import { Component, OnInit } from "@angular/core";

import { UserService } from "../../../core/services/user.service";

import { News } from "../../../core/interfaces/news.interface";

@Component({
  selector: "user-news-page",
  templateUrl: "./news-page.component.html",
  styleUrl: "./news-page.component.scss",
})
export class NewsPageComponent implements OnInit {
  public listNews: News[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getNewsByUser()
      .subscribe((news: News[]) => this.listNews = news);
  }
}
