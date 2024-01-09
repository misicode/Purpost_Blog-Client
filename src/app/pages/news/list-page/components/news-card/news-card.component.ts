import { Component, Input, OnInit } from "@angular/core";
import { News } from "../../../../../core/interfaces/news.interface";

@Component({
  selector: "list-news-card",
  templateUrl: "./news-card.component.html",
  styleUrl: "./news-card.component.scss",
})
export class NewsCardComponent implements OnInit {
  @Input()
  public news!: News;

  ngOnInit(): void {
    if (!this.news) {
      throw Error("News is required");
    }
  }
}
