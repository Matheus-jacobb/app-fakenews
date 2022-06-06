import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CommentsModule } from '../../../components/comments/comments.module';
import { NewsCardModule } from '../../../components/news-card/news-card.module';
import { NewsDetailRoutingModule } from './news-detail.routing.module';
import { NewsDetailsComponent } from './news-details.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    NewsDetailRoutingModule,
    NewsCardModule,
    CommentsModule,
  ],
  declarations: [NewsDetailsComponent],
})
export class NewsDetailsModule {
}
