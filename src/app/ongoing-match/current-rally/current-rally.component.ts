import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../record-event/dto/game.dto';

@Component({
  selector: 'app-current-rally',
  templateUrl: './current-rally.component.html',
  styleUrls: ['./current-rally.component.scss']
})
export class CurrentRallyComponent {
  currentGame$: Observable<Game>;
  showRallies: boolean = false;
  currentRallyId: number = 0;
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.currentGame$ = this.gameService.getCurrentGame();
    this.currentGame$.subscribe(x => {
      console.log(x);
    })
  }

  toggleRallyView() {
    this.showRallies = !this.showRallies;
  }

}
