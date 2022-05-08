import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ColorPickerComponent],
  exports: [ColorPickerComponent]
})
export class ColorPickerModule { }
