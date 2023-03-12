import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.scss']
})


export class IconButtonsComponent {
  @Input() iconSource: string;
  @Input() label: string;


}
