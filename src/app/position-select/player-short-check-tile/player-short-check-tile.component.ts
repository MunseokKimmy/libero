import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-short-check-tile',
  templateUrl: './player-short-check-tile.component.html',
  styleUrls: ['./player-short-check-tile.component.scss']
})
export class PlayerShortCheckTileComponent {
  @Input() name: string = "";
  @Input() profilePictureId: string; //idk how to implement this yet.
  @Input() selected: boolean = false; //true means check mark
  @Input() color?: string = "#F6F6F6";
}
