import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommentsComponent } from './comments.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CommentsComponent],
  exports: [CommentsComponent]
})
export class CommentsModule { }
