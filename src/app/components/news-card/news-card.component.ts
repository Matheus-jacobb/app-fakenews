import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { newsProxy } from 'src/models/proxies/news.proxy';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
   }

  //#region Inputs
  @Input()
  public news: newsProxy;
  //#endregion

  @ViewChild("card") card;

  ngOnInit() {
    
  }

}
