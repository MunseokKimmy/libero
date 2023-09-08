import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { Game, TeamScored } from '../record-event/dto/game.dto';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit, OnChanges {
  @Input() currentGame: Game;
  @Input() currentRally: boolean = true;
  @Input() currentRallyId: number = 1;
  currentRallyWhichTeamScored: TeamScored = TeamScored.Unknown;
  currentRallyTeam1Points: number = 0;
  currentRallyTeam2Points: number = 0;

  constructor(public cdr: ChangeDetectorRef) { 
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentRally']){
      if (!changes['currentRally']?.firstChange) {
        this.currentRally = changes['currentRally']?.currentValue;
      }
    }
    if (changes['currentRallyId']){
      if (!changes['currentRallyId']?.firstChange) {
        this.currentRallyId = changes['currentRallyId']?.currentValue;
        this.currentRallyWhichTeamScored = this.currentGame.rallies.get(this.currentRallyId).whichTeamScored;
        this.currentRallyTeam1Points = this.currentGame.rallies.get(this.currentRallyId).team1Score;
        this.currentRallyTeam2Points = this.currentGame.rallies.get(this.currentRallyId).team2Score;
        console.log("Current rally ID in scoreboard: "+ this.currentRallyId);
      }
    }
  }

}
