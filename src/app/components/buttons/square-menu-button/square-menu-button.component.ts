import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-menu-button',
  templateUrl: './square-menu-button.component.html',
  styleUrls: ['./square-menu-button.component.scss']
})
export class SquareMenuButtonComponent {
  @Input() iconType: string;
}
