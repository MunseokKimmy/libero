import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { InGamePlayerShort } from '../ongoing-match/record-event/dto/player-result.dto';
import { PlayerCount } from './player-count.enum';
import { FormControl } from '@angular/forms';
import { Formation } from './formation.enum';
import { PlayerLookupShort } from '../services/dto/player-lookup-short.dto';

@Component({
  selector: 'app-position-select',
  templateUrl: './position-select.component.html',
  styleUrls: ['./position-select.component.scss']
})
export class PositionSelectComponent implements OnInit {
  selectedPlayers: PlayerLookupShort[];
  team1: boolean = true;
  playerCount: PlayerCount = PlayerCount['6s'];
  playerCountEnum = PlayerCount;
  formationEnum = Formation;
  formationEnumKeys;
  formationSelect: Formation = Formation['6-6 (No Positions)'];
  constructor(public gameService: GameService) {
    if (this.team1) {
      this.selectedPlayers = this.gameService.getTeam1Players();
    } else {
      this.selectedPlayers = this.gameService.getTeam2Players();
    }
  }
  
  ngOnInit() {
    this.initializeFormationKeys();
  }
  
  initializeFormationKeys() {
    this.formationEnumKeys = Object.values(this.formationEnum).filter(value => typeof value === 'number');
  }

  check() {
  }

  selectAPlayer(player) {

  }

}
