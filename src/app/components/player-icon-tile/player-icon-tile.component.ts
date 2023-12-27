import { Component, Input } from '@angular/core';
import { PlayerPosition, PlayerPositionButtonLabels } from 'src/app/position-select/position.enum';

@Component({
  selector: 'app-player-icon-tile',
  templateUrl: './player-icon-tile.component.html',
  styleUrls: ['./player-icon-tile.component.scss']
})
export class PlayerIconTileComponent {
  @Input() name: string = "";
  @Input() profilePictureId: string; //idk how to implement this yet.
  @Input() icon: string | PlayerPosition = "check";
  @Input() color?: string = "#F6F6F6";

  positionEnum = PlayerPositionButtonLabels;
}
