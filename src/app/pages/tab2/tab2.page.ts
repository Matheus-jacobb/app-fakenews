import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FileToBase64Service } from 'src/app/services/fileToBase64.service';
import { NewsService } from 'src/app/services/news.service';
import { createNewsEnum } from 'src/models/enum/create-news.enum';
import { PagesEnum } from 'src/models/enum/pages.enum';
import { NewsProxy } from 'src/models/proxies/news.proxy';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  constructor(
    private readonly fileToBase64: FileToBase64Service,
    private readonly router: Router,
    private readonly newsService: NewsService,
    private readonly zone: NgZone,
  ) { }

  public createNewsEnum: typeof createNewsEnum = createNewsEnum;
  public currentTab: number = createNewsEnum.TITLE;

  public coverPhoto: string = '';
  public isAnimationRunning: boolean = false;

  public buttonEnable = true;

  public news: NewsProxy = {
    color: '',
    title: '',
    imageSrc: '',
    description: '',
    realRating: 0,
    fakeRating: 0,
  };

  //#region Life-Cycle
  public ionViewDidEnter(): void {

    this.news = {
      color: '',
      title: '',
      imageSrc: '',
      description: '',
      realRating: 0,
      fakeRating: 0,
    };
    this.currentTab = createNewsEnum.TITLE;
    this.checkDefinedFields();
  }

  //#endregion

  public nextPage() {
    if (this.isAnimationRunning)
      return;

    this.buttonEnable = true;

    if (this.currentTab === createNewsEnum.DESCRIPTION) {
      this.news.userName = 'user';
      this.newsService.setNews(this.news);
    }

    if (this.currentTab === createNewsEnum.POSTED) {
      this.zone.run(() => {
        this.router.navigate([PagesEnum.FEED]);
      });
    }

    this.currentTab++;
    this.isAnimationRunning = true;

    this.checkDefinedFields();

    setTimeout(() => {
      this.isAnimationRunning = false;
    }, 1000);
  }

  public async handleFileInput(value) {
    this.coverPhoto = await this.fileToBase64.getBase64(value);
    this.news.imageSrc = this.coverPhoto;

    if (this.coverPhoto) {
      this.buttonEnable = true;
    }
  }

  public takeInfoForInput(type: 'title' | 'url' | 'description'): void {

    // TODO: verificar erro de evento (value)
    if (type === 'title') {
      if (this.news.title)
        this.buttonEnable = true;
    }

    if (type === 'description') {
      this.buttonEnable = false;

      if (this.news.description)
        this.buttonEnable = true;
    }

    // TODO: implementar url
  }

  public takeColor(value: string): void {
    this.news.color = value;

    if (value) {
      this.buttonEnable = true;
    }
  }

  public checkDefinedFields(): void {
    if (this.currentTab === createNewsEnum.COVER_IMAGE) {
      if (!this.news.imageSrc)
        this.buttonEnable = false;

      if (!this.news.color)
        this.buttonEnable = false;
    }

    if (this.currentTab === createNewsEnum.TITLE) {
      if (!this.news.title) {
        this.buttonEnable = false;
      }
    }
  }

}
