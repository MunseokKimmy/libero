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
  currentRallyId: number = 0;
  rallies: Map<number, GameRally>;
  rallyArray: GameRally[];
  team1Score: number;
  team2Score: number;
  constructor(public gameService: GameService, public dialog: MatDialog) {
    this.currentGame$ = this.gameService.getCurrentGame();
    this.currentGame$.subscribe(x => {
      this.rallies = x.rallies;
      this.rallyArray = Array.from(x.rallies.values());
      this.team1Score = x.team1Score;
      this.team2Score = x.team2Score;
      console.log("Game Updated");
      console.log(x);
      console.log(this.rallies);
    });
  }

  ngOnInit(): void {
  }

  toggleRallyView() {
    let ralliesModal = this.dialog.open(ChooseRallyComponent, {
      panelClass: 'fullscreen-dialog',
      data: {rallies: this.rallies, rallyArray: this.rallyArray}
    });
    ralliesModal.afterClosed().subscribe(result => {
      console.log(result);
    });
    console.log("Triggered");
  }

  //Once the rally has ended, calls this method
  rallyFinished(rallyInfo: GameRally) {
    this.gameService.updateRally(rallyInfo.rallyId, rallyInfo);
    let keys: number[] = Array.from(this.rallies.keys());
    if (rallyInfo.rallyId == Math.max(...keys)) {
      this.gameService.addEmptyRally(this.team1Score, this.team2Score);
    }
  }

  selectRally(rallyId: number) {
    this.currentRallyId = rallyId;
  }

}
