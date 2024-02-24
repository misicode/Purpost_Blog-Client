import { Component, OnInit } from "@angular/core";

import { UserService } from "../../../core/services/user.service";

import { News } from "../../../core/interfaces/news.interface";

@Component({
  selector: "user-list-news-page",
  templateUrl: "./list-news-page.component.html",
  styleUrl: "./list-news-page.component.scss",
})
export class ListNewsPageComponent implements OnInit {
  public listNews: News[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getNewsByUser()
      .subscribe((news: News[]) => this.listNews = news);
  }
}
