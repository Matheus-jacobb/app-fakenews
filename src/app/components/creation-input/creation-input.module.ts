import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationInputComponent } from './creation-input.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CreationInputComponent],
  exports: [CreationInputComponent]
})
export class CreationInputModule { }
