import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../ongoing-match/record-event/dto/game.dto';
import { Observable } from 'rxjs';
import { PlayerLookupShort } from '../services/dto/player-lookup-short.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent {
  currentGame$: Observable<Game>;
  team1Starting: PlayerLookupShort[];
  team2Starting: PlayerLookupShort[];
  team1Bench: PlayerLookupShort[];
  team2Bench: PlayerLookupShort[];
  constructor(public gameService: GameService, public router: Router) {
    this.currentGame$ = this.gameService.getCurrentGame();
    this.currentGame$.subscribe(x => {
      console.log(x);
      console.log(this.gameService);
      this.team1Bench = Array.from(x.team1.players.values());
      this.team2Bench = Array.from(x.team2.players.values());
    });
  }

  routeToPage() {
    this.router.navigate(['/', 'ongoing-game']);
  }

}
