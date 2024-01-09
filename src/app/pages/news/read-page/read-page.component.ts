import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";

import { News } from "../../../core/interfaces/news.interface";

import { NewsService } from "../../../core/services/news.service";

@Component({
  selector: "news-read-page",
  templateUrl: "./read-page.component.html",
})
export class ReadPageComponent implements OnInit {
  public news?: News;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.newsService.getNewsById(id) )
      ).subscribe(
        news => {
          if (!news) return this.router.navigateByUrl("/news");

          this.news = news;

          return;
        }
      )
  }
}
