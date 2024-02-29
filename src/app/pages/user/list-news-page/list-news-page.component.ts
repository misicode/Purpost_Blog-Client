import { Component, OnInit, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { NewsService } from "../../../core/services/news.service";

import { News } from "../../../core/interfaces/news.interface";

@Component({
  selector: "user-list-news-page",
  templateUrl: "./list-news-page.component.html",
  styleUrl: "./list-news-page.component.scss",
})
export class ListNewsPageComponent implements OnInit {
  private toastrService = inject(ToastrService);
  
  public idNews: string = "";
  public isOpen: boolean = false;
  public listNews: News[] = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNewsByUser()
      .subscribe((news: News[]) => this.listNews = news);
  }

  deleteNews() {
    this.newsService.deleteNews(this.idNews)
      .subscribe(
        msg => {
          this.listNews = [];
          this.loadNews();
          
          this.isOpen = false;
          this.toastrService.success(msg);
        }
      );
  }
  
  openModal(id: string) {
    this.idNews = id;
    this.isOpen = true;
  }

  closeModal() {
    this.idNews = "";
    this.isOpen = false;
  }
}
