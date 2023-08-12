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
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.currentGame$ = this.gameService.getCurrentGame();
    this.currentGame$.subscribe(x => {
      console.log(x);
      this.rallies = x.rallies;
    });
  }

  toggleRallyView() {
    this.showRallies = !this.showRallies;
  }

  rallyFinished(rallyInfo: GameRally) {
    this.gameService.updateRally(rallyInfo.rallyId, rallyInfo);
    //8/7/23 Issue TO-DO:
    //Currently adds rallies indiscriminately whenever a "New Rally" is started.
    //Needs to check keys to see if a new rally is necessary.
    //Otherwise, a new rally will be created when editing a previous rally's result. 
    //Therefore, need to grab the Map's Keys, find the max key. (RallyId)
    //If the highest rally Id matches the edited rally id, then it's the last rally in the game.
    //So create a new rally. 
    let keys: number[] = Array.from(this.rallies.keys());
    if (rallyInfo.rallyId == Math.max(...keys)){
      this.gameService.addRally();
    }
  }

  selectRally(rallyId: number) {
    this.currentRallyId = rallyId;
  }

}
