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
  @Input() iconName: Results;
  @Input() label: string;
  @Input() buttonColor: ColorType = ColorType.Zero;
  iconType: IconType;

  ngOnInit() {
    if (this.iconName == Results.Ace) {
      this.iconType = IconType.Ace;
    } 
    else if (this.iconName == Results.Block) {
      this.iconType = IconType.Block;
    } 
    else if (this.iconName == Results.Kill) { 
      this.iconType = IconType.Kill;
    } 
    else if (this.iconName == Results.Set) { //2
      this.iconType = IconType['Second Hit'];
    } 
    else if (this.iconName == Results.Pass) { //1
      this.iconType = IconType['First Hit'];
    } 
    //Over the Net 
    else if (this.iconName == Results['Zero Attack'] || this.iconName == Results['Zero Block'] || this.iconName == Results['Zero Serve']) {
      this.iconType = IconType['Over the Net'];
    } 
    //Error
    else if (this.iconName == Results['Serve Error'] || this.iconName == Results['Attack Error'] || this.iconName == Results['BH Error'] || this.iconName == Results['Block Error'] || this.iconName == Results['Rec. Error']) {
      this.iconType = IconType.Error;
    } 
  }
}
