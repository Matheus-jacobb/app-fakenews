import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit() {}

}
