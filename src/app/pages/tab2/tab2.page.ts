import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FileToBase64Service } from 'src/app/services/fileToBase64.service';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/models/classes/news';
import { createNewsEnum } from 'src/models/enum/create-news.enum';
import { PagesEnum } from 'src/models/enum/pages.enum';
import { newsProxy } from 'src/models/proxies/news.proxy';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private readonly fileToBase64: FileToBase64Service,
    private readonly router : Router,
    private readonly newsService: NewsService,
    private readonly zone: NgZone
  ) {}

  public createNewsEnum: typeof createNewsEnum = createNewsEnum;
  public currentTab:number = createNewsEnum.TITLE;

  public coverPhoto:string = '';
  public isAnimationRunning: boolean = false;

  public news: newsProxy = {
    color: '',
    title: '',
    imageSrc: '',
    description: '',    
  };

  public nextPage(){
    if(this.isAnimationRunning)
      return

    if(this.currentTab === createNewsEnum.POSTED){
      this.newsService.setNews(this.news);

      this.zone.run(() => {
        this.router.navigate([PagesEnum.FEED]);
      })
    }

    this.currentTab++;
    this.isAnimationRunning = true;

    setTimeout(() => {
      this.isAnimationRunning = false;
    }, 1000);
  }

  public async handleFileInput(value){
    this.coverPhoto = await this.fileToBase64.getBase64(value);
    this.news.imageSrc = this.coverPhoto;
  }

  public takeInfoForInput(value: string, type: 'title' | 'url'): void {

    // TODO: verificar erro de evento (value)
    if(typeof value === 'string' &&  type === 'title'){
      this.news.title = value;
    }

    // TODO: implementar url
  }

  public takeColor(value: string): void {
      this.news.color = value;
  }

}
