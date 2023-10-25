import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.scss']
})
export class MenuButtonsComponent {
  @Input() active: boolean = true;
  @Input() buttonColor: string;
  @Input() iconType: string;
  @Input() buttonText: string;
  constructor() {

  }
}
