import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NewsProxy } from 'src/models/proxies/news.proxy';

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
  public news: NewsProxy;

  @Input()
  public withTitle: boolean = true;

  @Input()
  public withRatings: boolean = true;

  //#endregion

  @ViewChild("card") card;

  ngOnInit() {

  }

}
