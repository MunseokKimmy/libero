import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-current-rally',
  templateUrl: './current-rally.component.html',
  styleUrls: ['./current-rally.component.scss']
})
export class CurrentRallyComponent {
  currentGame$;
  showRallies: boolean = false;
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.currentGame$ = this.gameService.getCurrentGame();
  }

  toggleRallyView() {
    this.showRallies = !this.showRallies;
  }

}
