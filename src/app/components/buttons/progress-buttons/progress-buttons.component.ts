import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-buttons',
  templateUrl: './progress-buttons.component.html',
  styleUrls: ['./progress-buttons.component.scss']
})
export class ProgressButtonsComponent {
  //string path for page to navigate to
  @Input() path: string;
  //text to display in button
  @Input() buttonText: string;
  //Defaults to right facing arrows
  @Input() iconType: string = "continue";
}
