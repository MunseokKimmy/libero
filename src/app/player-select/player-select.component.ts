import { Component, OnInit } from '@angular/core';
import { PlayerTeamLookupService } from '../services/player-team-lookup.service';
import { PlayerLookupShort } from '../services/dto/player-lookup-short.dto';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent implements OnInit {
  
  playerSearchResult: PlayerLookupShort[] = [];
  chosenPlayers: PlayerLookupShort[] = [];
  constructor(public playerLookupService: PlayerTeamLookupService) {
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

}
