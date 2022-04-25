import { Component } from '@angular/core';
import { createNewsEnum } from 'src/models/enum/create-news.enum';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  public createNewsEnum: typeof createNewsEnum = createNewsEnum;
  public currentTab = 1;

  public nextPage(){
    if(this.currentTab === createNewsEnum.URL)
      this.currentTab = 0;

    this.currentTab++;
  }

}
