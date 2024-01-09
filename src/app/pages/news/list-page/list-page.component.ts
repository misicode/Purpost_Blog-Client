import { Component, OnInit } from "@angular/core";

import { News } from "../../../core/interfaces/news.interface";
import { NewsService } from "../../../core/services/news.service";

@Component({
  selector: "news-list-page",
  templateUrl: "./list-page.component.html",
})
export class ListPageComponent implements OnInit {
  public listNews: News[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(news => this.listNews = news);
  }
}
