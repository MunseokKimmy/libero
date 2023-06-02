import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorType } from '../../buttons/icon-buttons/button-color';
import { Results } from '../dto/button-text';
import { EventType } from '../dto/event-type';
import { InGamePlayerShort, PlayerResult } from '../dto/player-result.dto';

@Component({
  selector: 'app-player-event',
  templateUrl: './player-event.component.html',
  styleUrls: ['./player-event.component.scss']
})
export class PlayerEventComponent {
  @Input() eventType: EventType = EventType.Serve;
  @Input() players: InGamePlayerShort[] = [];
  @Input() eventId: number = 0;
  @Output() selectedPlayerResult = new EventEmitter<PlayerResult>();
  playerResult: PlayerResult;

  results = Results;
  colorType = ColorType;
  eventTypeEnum = EventType;

  selectedIndexes: number[] = [];
  possibleResults: Results[] = [];
  resultIndexes: boolean[] = [];
  constructor() {
    //I think that I need to change this so RecordEvent feeds in the playerResult object here.
    //This class takes PlayerResult and adds in the player and the result when applicable. 
    this.playerResult = ({
      eventId: this.eventId,
      gameId: 2,
      playerInfo: null,
      eventType: this.eventType,
      eventResult: Results.Undecided
    });
  }
  ngOnInit(): void {
    if (this.eventType == EventType.Serve) {
      this.possibleResults.push(Results['Zero Serve']);
      this.possibleResults.push(Results.Ace);
      this.possibleResults.push(Results['Serve Err']);
      this.resultIndexes = [true, true, true];
    } else if (this.eventType == EventType['Serve Receive']) {
      this.possibleResults.push(Results.Pass);
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['Dead Ball']);
      this.possibleResults.push(Results['Rec. Err']);
      this.resultIndexes = [true, true, true, true, true, true];
    } else if (this.eventType == EventType['First Hit']) {
      this.possibleResults.push(Results.Pass);
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['Dead Ball']);
      this.possibleResults.push(Results['BH Err']);
      this.resultIndexes = [true, true, true, true, true, true];
    } else if (this.eventType == EventType['Second Hit']) {
      this.possibleResults.push(Results.Set);
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['BH Err']);
      this.possibleResults.push(Results['Atk Err']);
      this.resultIndexes = [true, true, true, true, true, true];
    } else if (this.eventType == EventType['Third Hit']) {
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['Atk Err']);
      this.resultIndexes = [true, true, true, true];
    } else if (this.eventType == EventType.Block) {
      this.possibleResults.push(Results['Zero Block']);
      this.possibleResults.push(Results['Block Touch']);
      this.possibleResults.push(Results.Block);
      this.possibleResults.push(Results['Block Err']);
      this.possibleResults.push(Results['No Block']);
      this.resultIndexes = [true, true, true, true, true];
    }
  }

  onPlayerClick(key: InGamePlayerShort) {
    if (this.playerResult.playerInfo == key) {
      console.log("Player is now null");
      this.playerResult.playerInfo = null;
    } else {
      console.log("Player is now set");
      this.playerResult.playerInfo = key;
    }
  }

  onResultClick(key: Results, index: number) {
    if (this.playerResult.eventResult == key) {
      return;
    } else {
      this.playerResult.eventResult = key;
      this.resultIndexes.fill(false);
      this.resultIndexes[index] = true;
      console.log(this.playerResult);
      this.selectedPlayerResult.emit(this.playerResult);
    }
  }
}
