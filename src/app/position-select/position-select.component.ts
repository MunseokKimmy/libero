import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { InGamePlayerShort } from '../ongoing-match/record-event/dto/player-result.dto';
import { PlayerCount } from './player-count.enum';
import { FormControl } from '@angular/forms';
import { Formation } from './formation.enum';
import { PlayerLookupShort } from '../services/dto/player-lookup-short.dto';
import { PlayerPosition } from './position.enum';

@Component({
  selector: 'app-position-select',
  templateUrl: './position-select.component.html',
  styleUrls: ['./position-select.component.scss']
})
export class PositionSelectComponent implements OnInit {
  selectedPlayers: PlayerLookupShort[];
  positionPlayerMap: Map<PlayerPosition, PlayerLookupShort[]>;
  team1: boolean = true;
  playerCount: PlayerCount = PlayerCount['6s'];
  playerCountEnum = PlayerCount;
  formationEnum = Formation;
  formationEnumKeys;
  formationSelect: Formation = Formation['6-6 (No Positions)'];
  positionEnum = PlayerPosition;
  positionMenu: PlayerPosition = PlayerPosition.OH;
  positionLabels;

  constructor(public gameService: GameService) {
    if (this.team1) {
      this.selectedPlayers = this.gameService.getTeam1Players();
    } else {
      this.selectedPlayers = this.gameService.getTeam2Players();
    }
    this.positionLabels = Object.values(this.positionEnum).filter(value => typeof value === 'number');
    console.log(this.positionLabels);
    console.log(this.selectedPlayers);
  }
  
  ngOnInit() {
    this.initializeFormationKeys();
    this.initializePositionMap();
  }

  initializePositionMap() {
    this.positionPlayerMap = new Map<PlayerPosition, PlayerLookupShort[]>();
    this.formationEnumKeys.forEach((key: number) => {
       this.positionPlayerMap.set(key, []);
    });
  }
  
  initializeFormationKeys() {
    this.formationEnumKeys = Object.values(this.formationEnum).filter(value => typeof value === 'number');
    console.log(this.formationEnumKeys);
  }

  check() {
  }

  positionSelect(position) {
    this.positionMenu = position;
  }

  selectAPlayer(player: PlayerLookupShort) {

  }

}
