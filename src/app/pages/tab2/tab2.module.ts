import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ArrowCircleModule } from 'src/app/components/arrow-circle/arrow-circle.module';
import { CreationInputModule } from 'src/app/components/creation-input/creation-input.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    ArrowCircleModule,
    CreationInputModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
