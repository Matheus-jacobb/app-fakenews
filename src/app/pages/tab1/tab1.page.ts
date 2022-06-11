import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { NewsProxy } from 'src/models/proxies/news.proxy';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  public news: NewsProxy[];

  public newsFiltered: NewsProxy[];

  public totalOfNews: number = 0;

  constructor(
    private readonly newsService: NewsService,
    private readonly router: Router,
  ) {
  }

  //#region public properties

  //#endregion

  //#region Life-Cycle
  public ionViewDidEnter(): void {
    this.loadNews();
    this.checkPage();
    this.newsFiltered = [...this.news];
  }

  //#endregion

  //#region public methods
  public searchCards(value: string): void {
    this.newsFiltered = [...this.news];
    this.newsFiltered = this.news.filter((a) => a.title.toLowerCase().includes(value.toLowerCase()));
    //TODO: IMPLEMENTS API REQUEST HERE WITH FILTER
  }

  public checkPage(): void {
    if (this.router.url.includes('mynews')) {
      this.news = this.news.filter((value) => value.userName);
    }
  }

  public isMyNewsPage(): boolean {
    return !!this.router.url.includes('mynews')
  }


  public loadNews(): void {
    this.news = [
      ...this.getNews(),
    ];

    this.totalOfNews = this.news.length;
  }

  public getNews(): NewsProxy[] {
    const news = this.newsService.getNews();
    return news;
  }

  public async goToDetails(id) {
    if(this.isMyNewsPage()){
    return await this.router.navigateByUrl(`/tabs/news/${ id + this.totalOfNews - 1 }`);
    }
    await this.router.navigateByUrl(`/tabs/news/${ id }`);
  }

  //#endregion
}
