import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameRally } from '../record-event/dto/game.dto';

@Component({
  selector: 'app-choose-rally',
  templateUrl: './choose-rally.component.html',
  styleUrls: ['./choose-rally.component.scss']
})
export class ChooseRallyComponent {
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
