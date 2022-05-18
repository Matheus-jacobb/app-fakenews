import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-creation-input',
  templateUrl: './creation-input.component.html',
  styleUrls: ['./creation-input.component.scss'],
})
export class CreationInputComponent implements OnInit {

  constructor() { }

  //#region Inputs
  @Input() text: string;
  @Input() isTextArea: boolean = false;
  @Input() isImage: boolean = false;
  @Input() isOptional: boolean = false;
  //#endregion

  //#region Outputs

  @Output()
  public textInput = new EventEmitter<string>();

  public model = '';

  //#endregion

  ngOnInit() {}

  public onChangeInput(value: string): void{
    this.textInput.emit(value);
  }

}
