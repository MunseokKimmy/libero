import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Game, GameRally } from '../record-event/dto/game.dto';

@Component({
  selector: 'app-current-rally',
  templateUrl: './current-rally.component.html',
  styleUrls: ['./current-rally.component.scss']
})
export class CurrentRallyComponent {
  currentGame$: Observable<Game>;
  showRallies: boolean = false;
  currentRallyId: number = 0;
  rallies: Map<number, GameRally>;
  team1Score: number;
  team2Score: number;
  constructor(public gameService: GameService) { 
    this.currentGame$ = this.gameService.getCurrentGame();
    this.currentGame$.subscribe(x => {
      this.rallies = x.rallies;
      this.team1Score = x.team1Score;
      this.team2Score = x.team2Score;
      console.log(x);
      console.log("Game Updated");
    });
  }

  ngOnInit(): void {
  }

  toggleRallyView() {
    this.showRallies = !this.showRallies;
    console.log("Triggered");
  }

  //Once the rally has ended, calls this method
  rallyFinished(rallyInfo: GameRally) {
    this.gameService.updateRally(rallyInfo.rallyId, rallyInfo);
    let keys: number[] = Array.from(this.rallies.keys());
    if (rallyInfo.rallyId == Math.max(...keys)){
      this.gameService.addEmptyRally(this.team1Score, this.team2Score);
    }
  }

  selectRally(rallyId: number) {
    this.currentRallyId = rallyId;
  }

}
