import { Component, OnInit } from "@angular/core";

import { NewsService } from "../../../core/services/news.service";

import { News } from "../../../core/interfaces/news.interface";

@Component({
  selector: "user-list-news-page",
  templateUrl: "./list-news-page.component.html",
  styleUrl: "./list-news-page.component.scss",
})
export class ListNewsPageComponent implements OnInit {
  public listNews: News[] = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsService.getNewsByUser()
      .subscribe((news: News[]) => this.listNews = news);
  }
}
