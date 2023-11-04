import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-buttons',
  templateUrl: './progress-buttons.component.html',
  styleUrls: ['./progress-buttons.component.scss']
})
export class ProgressButtonsComponent {
  //string path for page to navigate to
  @Input() path: string[];
  //text to display in button
  @Input() buttonText: string[];
  //Defaults to right facing arrows
  @Input() iconType: string[] = ["continue"];
  //Can be up to three in the row, defaults to one
  @Input() numOfButtons: number = 1;
  //1 is bottom right, default
  //0 is middle
  //-1 is bottom left
  @Input() positioning: number = 1;

  constructor(public router: Router) {

  }

  routeToPage() {
    this.router.navigate(['/', this.path[0]]);
  }

}
