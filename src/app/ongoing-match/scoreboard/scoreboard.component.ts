import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { Game } from '../record-event/dto/game.dto';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit, OnChanges {
  @Input() currentGame: Game;
  @Input() currentRally: boolean = true;
  @Input() currentRallyId: number = 0;

  constructor(public cdr: ChangeDetectorRef) { 
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['currentRally']){
      if (!changes['currentRally']?.firstChange) {
        this.currentRally = changes['currentRally']?.currentValue;
      }
    }
    if (changes['currentRallyId']){
      if (!changes['currentRallyId']?.firstChange) {
        this.currentRallyId = changes['currentRallyId']?.currentValue;
      }
    }
    console.log(this.currentRally);
    console.log(this.currentRallyId);
  }

}
