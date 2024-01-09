import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.scss']
})
export class MenuButtonsComponent {
  @Input() active: boolean = true;
  @Input() iconType: string;
  @Input() buttonText: string;
  @Input() buttonSubtext: string;
  constructor(public router: Router) {

  }

  navigateToPage() {
    if (this.iconType == "play") {
      this.router.navigate(['/', 'new-match']);
    }
  }
}
