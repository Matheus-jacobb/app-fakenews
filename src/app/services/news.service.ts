import { Injectable } from "@angular/core";
import { newsProxy } from "src/models/proxies/news.proxy";

@Injectable({
  providedIn: 'root'
})

export class NewsService {


  public news: newsProxy[] = [];

  public getNews(): newsProxy[] {
    return this.news;
  }

  public setNews(news: newsProxy) {
    this.news.push(news);
  }

  public findOne(index: number): newsProxy {
    let news: newsProxy;

    try{
      news[index];
    }
    catch(e) {
      throw 'Noticia não encontrada.'
    }
    finally{
      return news[index];
    }
  }

  public updateOne(index: number, entity: newsProxy): newsProxy{
    let news;

    try{
      news = this.findOne(index);
    }
    finally{
      news[index] = entity;
      return news[index];
    }
  }

  public deleteOne(index: number): void {
    let news;

    try{
      news = this.findOne(index);
    }
    finally{
      news[index].splice(index, 1);
    }
  }

}