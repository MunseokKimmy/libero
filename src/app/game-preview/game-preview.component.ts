import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../ongoing-match/record-event/dto/game.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent {
  currentGame$: Observable<Game>;
  constructor(public gameService: GameService) {
    this.currentGame$ = this.gameService.getCurrentGame();
    this.currentGame$.subscribe(x => {
      console.log(x);
      console.log(this.gameService);
    })
  }
}
