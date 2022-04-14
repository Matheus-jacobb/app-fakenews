import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NewsCardComponent } from '../components/news-card/news-card.component';
import { NewsCardModule } from '../components/news-card/news-card.module';
import { newsProxy } from 'src/models/proxies/news.proxy';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NewsCardModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
}
