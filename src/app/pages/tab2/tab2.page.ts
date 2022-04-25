import { Component } from '@angular/core';
import { FileToBase64Service } from 'src/app/services/fileToBase64.service';
import { createNewsEnum } from 'src/models/enum/create-news.enum';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public readonly fileToBase64: FileToBase64Service,
  ) {}

  public createNewsEnum: typeof createNewsEnum = createNewsEnum;
  public currentTab:number = createNewsEnum.COVER_IMAGE;
  public coverPhoto:string = '';
  public isAnimationRunning: boolean = false;

  public nextPage(){
    if(this.isAnimationRunning)
      return

    if(this.currentTab === createNewsEnum.URL){
      this.currentTab = 0
    }
    
    this.currentTab++;
    this.isAnimationRunning = true;

    setTimeout(() => {
      this.isAnimationRunning = false;
    }, 1000);
  }

  public async handleFileInput(value){
    this.coverPhoto = await this.fileToBase64.getBase64(value);
    console.log(this.coverPhoto)
  }

}
