import { Component, Input, OnInit } from '@angular/core';
import { GameType } from 'src/app/ongoing-match/record-event/dto/game-type';
import { TeamInfo } from 'src/app/ongoing-match/record-event/dto/game.dto';
import { PlayerLookupShort } from 'src/app/services/dto/player-lookup-short.dto';

@Component({
  selector: 'app-team-bench-starting',
  templateUrl: './team-bench-starting.component.html',
  styleUrls: ['./team-bench-starting.component.scss']
})
export class TeamBenchStartingComponent implements OnInit {

  @Input() team: TeamInfo;
  @Input() team1: boolean;
  teamBench: PlayerLookupShort[];
  teamStarting: PlayerLookupShort[];


  ngOnInit(): void {
    if (this.team.playerAmount == GameType['6s']) {
      this.teamStarting = Array.from(this.team.players.values()).slice(0, 6);
      this.teamBench = Array.from(this.team.players.values()).slice(6);
    }
  }

  constructor() {
  }


  startAPlayer(player: PlayerLookupShort) {
    
    const playerIndex: number = this.teamBench.indexOf(player, 0);
    if (playerIndex > -1) {
      this.teamBench.splice(playerIndex, 1);
    }
    const playerStartingIndex: number = this.teamStarting.indexOf(player, 0);
    if (playerStartingIndex == -1) {
      this.teamStarting.push(player);
    }

  }

  benchAPlayer(player: PlayerLookupShort) {
    const playerIndex: number = this.teamStarting.indexOf(player, 0);
    if (playerIndex > -1) {
      this.teamStarting.splice(playerIndex, 1);
    }
    const playerBenchIndex: number = this.teamBench.indexOf(player, 0);
    if (playerBenchIndex == -1) {
      this.teamBench.push(player);
    }
  }
}
