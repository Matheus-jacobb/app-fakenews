import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowCircleComponent } from './arrow-circle.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ArrowCircleComponent],
  exports: [ArrowCircleComponent]
})
export class ArrowCircleModule { }
