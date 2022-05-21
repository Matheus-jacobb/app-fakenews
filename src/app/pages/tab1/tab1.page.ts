import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { newsProxy } from 'src/models/proxies/news.proxy';
import { NewsStorage } from 'src/models/storage/news.storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  public news: newsProxy[];

  public newsFiltered: newsProxy[];

  constructor(
    private readonly newsService: NewsService,
    private readonly newsStorage: NewsStorage
  ) { }

  //#region public properties

  //#endregion

  //#region Life-Cycle
  public ionViewDidEnter(): void {
    console.log(this.getNews());
    this.loadNews();
    this.newsFiltered = [...this.news];
  }

  //#endregion

  //#region public methods
  public searchCards(value: string): void {
    this.newsFiltered = [...this.news];
    this.newsFiltered = this.news.filter((a) => a.description.toLowerCase().includes(value.toLowerCase()));
    //TODO: IMPLEMENTS API REQUEST HERE WITH FILTER
  }

  public loadNews(): void {
    this.news = [
      ...this.getStorageNews(),
      ...this.getNews()
    ];
  }

  public getStorageNews(): newsProxy[] {
    this.news = this.newsStorage.getNews();
    return this.news;
  }

  public getNews(): newsProxy[] {
    let news = this.newsService.getNews();
    return news;
  }

  //#endregion
}
