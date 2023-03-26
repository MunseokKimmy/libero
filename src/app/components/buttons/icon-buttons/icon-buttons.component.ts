import { Component, Input } from '@angular/core';

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
  @Input() iconName: string;
  @Input() label: string;

}
