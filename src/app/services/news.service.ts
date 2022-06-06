import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsProxy } from 'src/models/proxies/news.proxy';
import { NewsStorage } from '../../models/storage/news.storage';

@Injectable({
  providedIn: 'root',
})

export class NewsService {

  constructor(
    private readonly newsStorage: NewsStorage,
  ) {
    this.news = this.newsStorage.getNews();
  }

  public news: NewsProxy[] = [];
  public modelBehavior: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getNews(): NewsProxy[] {
    return this.news;
  }

  public setNews(news: NewsProxy) {
    this.news.push(news);
  }

  public findOne(index: number): NewsProxy {
    if (!this.news[index]){
      throw new Error('Noticia não encontrada.');
    }

    return this.news[index];
  }

  public updateOne(index: number, entity: NewsProxy): NewsProxy {
    let news;

    try {
      news = this.findOne(index);
    } finally {
      news[index] = entity;
      return news[index];
    }
  }

  public deleteOne(index: number): void {
    let news;

    try {
      news = this.findOne(index);
    } finally {
      news[index].splice(index, 1);
    }
  }

}
