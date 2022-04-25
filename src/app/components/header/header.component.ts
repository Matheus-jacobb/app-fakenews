import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {   }

  //#region public properties
  public openInput: boolean = false;
  public model = '';
  //#endregion

  //#region public Inputs/Outputs
  @Input()
  public activeSearchBar: boolean = false;
  
  @Output()
  public searchBarValue = new EventEmitter<string>();
  
  
  ngOnInit() {}

  //#region public methods

  public searchCards(value: string): void{
    this.searchBarValue.emit(value);
  }
  //#endregion

}
