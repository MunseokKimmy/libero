import { Component, Input } from '@angular/core';
import { ColorType } from './button-color';
import { IconType } from './icon-type';
import { Results } from '../../record-event/dto/button-text';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.scss']
})
// Ace: fa-regular fa-bullseye-arrow
// Kill: fa-solid fa-fire-flame-curved
// Assist: fa-solid fa-handshake-angle"
// Block: fa-solid fa-shield"
// Dig: fa-solid fa-shovel"
// Zero (Over the Net): fa-solid fa-overline"
// Error: fa-solid fa-circle-exclamation"
// First Hit: fa-solid fa-circle-1"
// Second Hit: fa-solid fa-circle-2"
// Zero Hit: fa-solid fa-circle-0"

export class IconButtonsComponent {
  @Input() iconSource: string;
  @Input() buttonResult: Results;
  buttonColor: ColorType;
  iconType: IconType;

  resultEnum = Results;

  ngOnInit() {
    if (this.buttonResult == Results.Ace) {
      this.iconType = IconType.Ace;
      this.buttonColor = ColorType.Stat;
    } 
    else if (this.buttonResult == Results.Block) {
      this.iconType = IconType.Block;
      this.buttonColor = ColorType.Stat;

    } 
    else if (this.buttonResult == Results['Blk Touch']) {
      this.iconType = IconType['Block Touch'];
      this.buttonColor = ColorType.Zero;
    }
    else if (this.buttonResult == Results.Kill) { 
      this.iconType = IconType.Kill;
      this.buttonColor = ColorType.Stat;

    } 
    else if (this.buttonResult == Results.Set) { //2
      this.iconType = IconType.Assist;
      this.buttonColor = ColorType.Stat;

    } 
    else if (this.buttonResult == Results.Pass) { //1
      this.iconType = IconType['First Hit'];
      this.buttonColor = ColorType.Zero;
      
    } 
    //Over the Net 
    else if (this.buttonResult == Results['Zero Atk'] || this.buttonResult == Results['Zero Blk'] || this.buttonResult == Results['Zero Serve'] || this.buttonResult == Results['Free Ball']) {
      this.iconType = IconType['Over the Net'];
      this.buttonColor = ColorType.Zero;
    } 
    //Error
    else if (this.buttonResult == Results['Serve Err'] || this.buttonResult == Results['Atk Err']|| this.buttonResult == Results['BH Err'] || this.buttonResult == Results['Blk Err'] || this.buttonResult == Results['Rec. Err']) {
      this.iconType = IconType.Error;
      this.buttonColor = ColorType.Error;
    } 
  }
}
