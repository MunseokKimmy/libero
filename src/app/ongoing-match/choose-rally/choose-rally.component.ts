import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game, GameRally, TeamScored } from '../record-event/dto/game.dto';
import { Observable } from 'rxjs/internal/Observable';
import { Results } from '../record-event/dto/button-text';

@Component({
  selector: 'app-choose-rally',
  templateUrl: './choose-rally.component.html',
  styleUrls: ['./choose-rally.component.scss']
})
export class ChooseRallyComponent {
  resultEnum = Results;
  teamScoredEnum = TeamScored;
  rallies: Map<number, GameRally>;
  rallyArray: GameRally[] = [];
  @Output() rallyIdSelected: EventEmitter<number> = new EventEmitter<number>(); 
  constructor(gameService: GameService) {
    gameService.getCurrentGame().subscribe(x => {
      this.rallies = x.rallies;
      this.rallyArray = Array.from(this.rallies.values());
    });
  }


  selectRally(rallyId: number) {
    this.rallyIdSelected.emit(rallyId);
  }
}
