import { Component, OnInit } from "@angular/core";

import { News } from "../../../core/interfaces/news.interface";
import { NewsService } from "../../../core/services/news.service";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrl: "./list-page.component.scss",
})
export class ListPageComponent implements OnInit {
  public listNews: News[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(news => this.listNews = news);
  }
}
