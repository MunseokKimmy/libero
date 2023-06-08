import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-ongoing-match',
  templateUrl: './ongoing-match.component.html',
  styleUrls: ['./ongoing-match.component.scss']
})
export class OngoingMatchComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

}
