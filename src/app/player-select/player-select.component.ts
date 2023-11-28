import { Component, OnInit } from '@angular/core';
import { PlayerTeamLookupService } from '../services/player-team-lookup.service';
import { PlayerLookupShort } from '../services/dto/player-lookup-short.dto';
import { FormControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { InGamePlayerShort } from '../ongoing-match/record-event/dto/player-result.dto';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss'],
  animations: [
    trigger('all-players-column-width', [
      state('selected', 
        style({width: '70%'})
      ),
      state('unselected', 
        style({width: '30%'})
      ),
      transition('selected => unselected', [
        animate('.5s ease-in')
      ]),
      transition('unselected => selected', [
        animate('.5s ease-in')
      ])
    ])
  ]
})
export class PlayerSelectComponent implements OnInit {
  
  searchText = new FormControl('');
  playerSearchResult: PlayerLookupShort[] = [];
  chosenPlayers: PlayerLookupShort[] = [];
  allPlayersSelected: boolean = true;
  //Team 1 selecting = true
  //Team 2 selecting = false
  team1: boolean = true;
  constructor(public playerLookupService: PlayerTeamLookupService, private router: Router, private gameService: GameService) {
  }
  
  ngOnInit(): void {
    this.searchPlayers("");
      
  }

  searchPlayers(searchstring: string) {
    this.playerSearchResult = this.playerLookupService.getPlayers();
  }

  selectAPlayer(player: PlayerLookupShort) {
    if (this.chosenPlayers.indexOf(player) == -1) {
      this.chosenPlayers.push(player);
    }
  }

  unselectAPlayer(player: PlayerLookupShort) {
    let index = this.chosenPlayers.indexOf(player);
    let newArray = this.chosenPlayers.filter((x, i) => i !== index);
    this.chosenPlayers = newArray;
  }

  toggleColumns(whichColumn: boolean) {
    if (whichColumn) {
      this.allPlayersSelected = true;
    } else {
      this.allPlayersSelected = false;
    }
  }
  routeToPage() {
    let playerShorts: InGamePlayerShort[] = this.chosenPlayers.map(x => {
      return new InGamePlayerShort(x.playerId, x.firstName, x.lastName);
    });
    if (this.team1) {
      this.gameService.setTeam1Players(playerShorts);
    } else {
      this.gameService.setTeam2Players(playerShorts);
    }
    console.log(this.gameService.getTeam1Players());
    this.router.navigate(['/', 'position-select']);
  }
}
