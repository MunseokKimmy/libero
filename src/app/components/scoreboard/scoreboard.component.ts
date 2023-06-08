import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../record-event/dto/game.dto';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  dateTime: string;
  currentGame: Game;
  constructor(public datePipe: DatePipe, public gameService: GameService) { 
    this.currentGame = this.gameService.getCurrentGame();
    this.dateTime = this.datePipe.transform(this.currentGame.startDate, 'h:mm a, MMM dd, y');
  }
  ngOnInit(): void {
  }

}
