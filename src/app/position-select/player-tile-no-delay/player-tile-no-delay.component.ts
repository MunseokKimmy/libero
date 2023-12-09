import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player-tile-no-delay',
  templateUrl: './player-tile-no-delay.component.html',
  styleUrls: ['./player-tile-no-delay.component.scss']
})
export class PlayerTileNoDelayComponent {
  @Input() name: string = "";
  @Input() username: string = "";
  @Input() profilePictureId: string; //idk how to implement this yet.
  @Input() selected: boolean = false;
  @Input() expanded: boolean = false;
  @Input() positionNumber: number;
  @Input() color?: string = "#F6F6F6";

  getInitials() {
    const fullName = this.name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }
}
