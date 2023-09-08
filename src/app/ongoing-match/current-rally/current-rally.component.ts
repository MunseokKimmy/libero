import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Game, GameRally } from '../record-event/dto/game.dto';
import { MatDialog } from '@angular/material/dialog';
import { ChooseRallyComponent } from '../choose-rally/choose-rally.component';

@Component({
  selector: 'app-current-rally',
  templateUrl: './current-rally.component.html',
  styleUrls: ['./current-rally.component.scss']
})
export class CurrentRallyComponent {
  currentGame$: Observable<Game>;
  currentRallyData$;
  currentRallyId: number = 1;
  currentRally: boolean = true;
  rallies: Map<number, GameRally>;
  rallyArray: GameRally[];
  team1Score: number;
  team2Score: number;
  constructor(public gameService: GameService, public dialog: MatDialog) {
  }
  
  ngOnInit(): void {
    this.currentGame$ = this.gameService.getCurrentGame();
    this.currentGame$.subscribe(x => {
      console.log("Updated here");
      this.rallies = x.rallies;
      this.team1Score = x.team1Score;
      this.team2Score = x.team2Score;
    });
    this.currentRallyData$ = this.gameService.getCurrentRallyId();
    this.currentRallyData$.subscribe(x => {
      this.currentRallyId = x[0];
      this.currentRally = x[1];
    });
  }

  toggleRallyView() {
    let ralliesModal = this.dialog.open(ChooseRallyComponent, {
      panelClass: 'fullscreen-dialog',
      data: {rallies: this.rallies, rallyArray: Array.from(this.rallies.values())}
    });
    ralliesModal.afterClosed().subscribe(result => {
      console.log(result);
      if (result == undefined) {
        //Do Nothing
        return;
      }
      else if (result == -1) {
        const topRallyId = this.rallies.get(Array.from(this.rallies.entries()).reduce((a, b) => a[0] < b[0] ? b : a)[0]).rallyId;
        this.gameService.setCurrentRallyId(topRallyId, true);
        this.currentRallyId = topRallyId;
        this.currentRally = true;
      } else {
        this.gameService.setCurrentRallyId(result, false);
        this.currentRallyId = result;
        this.currentRally = false;
      }
    });
  }

  //Once the rally has ended, calls this method
  rallyFinished(rallyInfo: GameRally) {
    this.gameService.updateRally(rallyInfo.rallyId, rallyInfo);
    let keys: number[] = Array.from(this.rallies.keys());
    if (rallyInfo.rallyId == Math.max(...keys)) {
      this.gameService.addEmptyRally(rallyInfo.team1Score, rallyInfo.team2Score);
      this.currentRallyId = this.currentRallyId + 1;
      this.currentRally = true;
    }
  }

  selectRally(rallyId: number) {
    this.currentRallyId = rallyId;
  }

}
