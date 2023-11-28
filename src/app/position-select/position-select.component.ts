import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { InGamePlayerShort } from '../ongoing-match/record-event/dto/player-result.dto';
import { PlayerLookupShort } from '../services/dto/player-lookup-short.dto';

@Component({
  selector: 'app-position-select',
  templateUrl: './position-select.component.html',
  styleUrls: ['./position-select.component.scss']
})
export class PositionSelectComponent {
  selectedPlayers: InGamePlayerShort[];
  constructor(private route: ActivatedRoute, public gameService: GameService) {
  }
}
