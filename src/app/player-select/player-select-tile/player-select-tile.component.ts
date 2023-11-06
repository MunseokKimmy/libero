import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-select-tile',
  templateUrl: './player-select-tile.component.html',
  styleUrls: ['./player-select-tile.component.scss']
})
export class PlayerSelectTileComponent {
  @Input() name: string = "";
  @Input() username: string = "";
  @Input() profilePictureId: string; //idk how to implement this yet.

  getInitials() {
    const fullName = this.name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }
}
