import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorType } from '../../buttons/icon-buttons/button-color';
import { Results } from '../dto/button-text';
import { EventType } from '../dto/event-type';
import { InGamePlayerShort, PlayerResult } from './player-result.dto';

@Component({
  selector: 'app-player-event',
  templateUrl: './player-event.component.html',
  styleUrls: ['./player-event.component.scss']
})
export class PlayerEventComponent {
  @Input() eventType: EventType = EventType.Serve;
  @Input() players: InGamePlayerShort[] = [];
  @Output() selectedPlayerResult = new EventEmitter<PlayerResult>();
  results = Results;
  colorType = ColorType;
  eventTypeEnum = EventType;
  public selectedPlayer: InGamePlayerShort;
  public selectedResult: Results = Results.Undecided;
  selectedIndexes: number[] = [];
  possibleResults: Results[] = [];
  resultIndexes: boolean[] = [];
  ngOnInit(): void {
    // this.players.forEach((element, index) => {
    //     this.selectedPlayer[element.name] = false;
    // });
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
      this.possibleResults.push(Results['Rec. Err']);
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
    if (this.selectedPlayer == key) {
      this.selectedPlayer = null;
    } else {
      this.selectedPlayer = key;
    }
    // setTimeout(() => {
    //   this.selectedPlayer[key] = false;
    // }, 2000);
  }

  onResultClick(key: Results, index: number) {
    if (this.selectedResult == key) {
      this.selectedResult = Results.Undecided;
      this.resultIndexes.fill(true);
    } else {
      this.selectedResult = key;
      let playerInfo: InGamePlayerShort = null;
      if (this.selectedPlayer != null) {
        playerInfo = this.selectedPlayer;
      }
      let playerResult: PlayerResult = ({
        eventId: "1",
        gameId: "2",
        playerInfo: playerInfo,
        eventType: this.eventType,
        eventResult: key
      });
      this.resultIndexes.fill(false);
      this.resultIndexes[index] = true;
      this.selectedPlayerResult.emit(playerResult);
    }
  }
}
