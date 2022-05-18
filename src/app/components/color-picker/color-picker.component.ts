import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { newsColorEnum } from 'src/models/enum/news-color.enum';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {

  constructor() { }

  @Output()
  public takeColor = new EventEmitter<string>();

  public newsColorEnum: typeof newsColorEnum = newsColorEnum;
  
  ngOnInit() {}

  //#region public methods

  public searchCards(value: string): void{
    this.takeColor.emit(value);
  }
}
