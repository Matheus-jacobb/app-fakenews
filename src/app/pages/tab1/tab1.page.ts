import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { newsProxy } from 'src/models/proxies/news.proxy';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(
    private readonly newsService: NewsService,
  ) {}
  
    //#region public properties

  public news: newsProxy[];

  public newsFiltered: newsProxy[];

    //#endregion

  //#region Life-Cycle

  public ngOnInit(): void {
    this.loadNews();
    this.newsFiltered = [...this.news];
  }

  //#endregion

  //#region public methods
  public searchCards(value: string): void{
    this.newsFiltered = [...this.news];
    this.newsFiltered = this.news.filter((a) => a.description.toLowerCase().includes(value.toLowerCase()) );
    //TODO: IMPLEMENTS API REQUEST HERE WITH FILTER
  }

  public loadNews(): void {
    this.news = this.newsService.getNews();
    console.log(this.news);
  }
  //#endregion
}
