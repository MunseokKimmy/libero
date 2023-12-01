import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { InGamePlayerShort } from '../ongoing-match/record-event/dto/player-result.dto';
import { PlayerCount } from './player-count.enum';
import { FormControl } from '@angular/forms';
import { Formation } from './formation.enum';

@Component({
  selector: 'app-position-select',
  templateUrl: './position-select.component.html',
  styleUrls: ['./position-select.component.scss']
})
export class PositionSelectComponent implements OnInit {
  selectedPlayers: InGamePlayerShort[];
  team1: boolean = true;
  playerCount: PlayerCount = PlayerCount['6s'];
  playerCountEnum = PlayerCount;
  formationEnum = Formation;
  formationEnumKeys;
  formationSelect: Formation = Formation['6-6 (No Positions)'];
  constructor(public gameService: GameService) {
  }
  
  ngOnInit() {
    this.initializeFormationKeys();
  }
  
  initializeFormationKeys() {
    this.formationEnumKeys = Object.values(this.formationEnum).filter(value => typeof value === 'number');
    console.log(this.formationEnumKeys)
  }

  check() {
    console.log(this.formationSelect);
  }

}
