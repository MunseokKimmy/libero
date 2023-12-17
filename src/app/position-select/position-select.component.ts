import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { PlayerCount } from './player-count.enum';
import { FormationSixes } from './formation.enum';
import { PlayerLookupShort } from '../services/dto/player-lookup-short.dto';
import { PlayerPosition, PlayerPositionFull } from './position.enum';

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
  formationEnum = FormationSixes;
  formationEnumKeys: (string | FormationSixes)[];
  formationSelect: FormationSixes = FormationSixes['6-6 (No Positions)'];
  positionEnum = PlayerPosition;
  posFullEnum = PlayerPositionFull;
  positionMenu: PlayerPosition = PlayerPosition.OH;
  positionLabels: (string | PlayerPosition)[];

  constructor(public gameService: GameService, public router: Router, private route: ActivatedRoute) {
    this.team1 = this.route.snapshot.paramMap.get('team') == '1';
    if (this.team1) {
      this.selectedPlayers = this.gameService.getTeam1Players();
    } else {
      this.selectedPlayers = this.gameService.getTeam2Players();
    }
    console.log(this.selectedPlayers);
  }
  
  ngOnInit() {
    this.initializePositionMap();
    this.initializeFormationKeys();
  }
  
  initializePositionMap() {
    this.positionLabels = Object.values(this.positionEnum).filter(value => typeof value === 'number').slice(1);
    this.positionPlayerMap = new Map<PlayerPosition, PlayerLookupShort[]>();
    this.positionLabels.forEach((key: number) => {
       this.positionPlayerMap.set(key, []);
    });
  }
  
  initializeFormationKeys() {
    this.formationEnumKeys = Object.values(this.formationEnum).filter(value => typeof value === 'number');
  }

  check() {
  }

  positionSelect(position) {
    this.positionMenu = position;
  }

  selectAPlayer(player: PlayerLookupShort) {
    let updatedPlayer: PlayerLookupShort;
    if (player.position != PlayerPosition.None) {
      updatedPlayer = this.unselectAPlayer(player);
    }
    switch (this.positionMenu) {
      case PlayerPosition.OH: 
        player.position = PlayerPosition.OH;
        let outsideHitters: PlayerLookupShort[] = this.positionPlayerMap.get(PlayerPosition.OH);
        console.log(player);
        if (!outsideHitters.includes(player)) {
          outsideHitters.push(player);
          this.positionPlayerMap.set(PlayerPosition.OH, outsideHitters);
          console.log(this.positionPlayerMap);
        }
        break;
      case PlayerPosition.OP:
        player.position = PlayerPosition.OP;
        let oppositeHitters: PlayerLookupShort[] = this.positionPlayerMap.get(PlayerPosition.OP);
        console.log(player);
        if (!oppositeHitters.includes(player)) {
          oppositeHitters.push(player);
          this.positionPlayerMap.set(PlayerPosition.OP, oppositeHitters);
          console.log(this.positionPlayerMap);
        }
        break;
      case PlayerPosition.MID:
        player.position = PlayerPosition.MID;
        let middles: PlayerLookupShort[] = this.positionPlayerMap.get(PlayerPosition.MID);
        console.log(player);
        if (!middles.includes(player)) {
          middles.push(player);
          this.positionPlayerMap.set(PlayerPosition.MID, middles);
          console.log(this.positionPlayerMap);
        }
        break;        
      case PlayerPosition.SET:
        player.position = PlayerPosition.SET;
        let setters: PlayerLookupShort[] = this.positionPlayerMap.get(PlayerPosition.SET);
        console.log(player);
        if (!setters.includes(player)) {
          setters.push(player);
          this.positionPlayerMap.set(PlayerPosition.SET, setters);
          console.log(this.positionPlayerMap);
        }
        break;   
      case PlayerPosition.LIB:
        player.position = PlayerPosition.LIB;
        let liberos: PlayerLookupShort[] = this.positionPlayerMap.get(PlayerPosition.LIB);
        console.log(player);
        if (!liberos.includes(player)) {
          liberos.push(player);
          this.positionPlayerMap.set(PlayerPosition.LIB, liberos);
          console.log(this.positionPlayerMap);
        }
        break;     
      case PlayerPosition.DS: 
        player.position = PlayerPosition.DS;
        let defSpecs: PlayerLookupShort[] = this.positionPlayerMap.get(PlayerPosition.DS);
        console.log(this.positionPlayerMap);
        if (!defSpecs.includes(player)) {
          defSpecs.push(player);
          this.positionPlayerMap.set(PlayerPosition.DS, defSpecs);
          console.log(this.positionPlayerMap);
        }
        break;     
    }
    updatedPlayer = player;
  }

  unselectAPlayer(player: PlayerLookupShort): PlayerLookupShort {
    player.position = PlayerPosition.None;
    let outsideHitters: PlayerLookupShort[] = this.positionPlayerMap.get(PlayerPosition.OH);
    if (outsideHitters.includes(player)) {
      //NEXT TODO
      let index = outsideHitters.indexOf(player);
      outsideHitters = outsideHitters.filter((x, i) => i != index);
      this.positionPlayerMap.set(PlayerPosition.OH, outsideHitters);
      console.log(this.positionPlayerMap);
    }
    return player;
  }

  findIndexOfPlayer(player: PlayerLookupShort) {
    const index = this.selectedPlayers.findIndex((playerI) => {
      return player.playerId == playerI.playerId;
    });
    return index;
  }

  routeToPage() {
    console.log(this.selectedPlayers);
    if (this.team1) {
      this.gameService.setTeam1Players(this.selectedPlayers);
      this.router.navigate(['/', 'player-select', '2' ]);
    } else {
      this.gameService.setTeam2Players(this.selectedPlayers);
      this.router.navigate(['/', 'game-preview' ]);
    }
  }

}
