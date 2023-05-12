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
  @Input() eventType: EventType = EventType['Serve Receive'];
  @Input() players: InGamePlayerShort[] = [];
  @Output() selectedPlayerResult = new EventEmitter<PlayerResult>();
  results = Results;
  colorType = ColorType;
  eventTypeEnum = EventType;
  public selectedPlayer: string = "";
  public selectedResult: string = "Undecided";
  selectedIndexes: number[] = [];
  possibleResults: Results[] = [];
  ngOnInit(): void {
    // this.players.forEach((element, index) => {
    //     this.selectedPlayer[element.name] = false;
    // });
    if (this.eventType == EventType.Serve) {
      this.possibleResults.push(Results.Ace);
      this.possibleResults.push(Results['Zero Serve']);
      this.possibleResults.push(Results['Serve Err']);
    } else if (this.eventType == EventType['Serve Receive']) {
      this.possibleResults.push(Results.Pass);
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results['Dead Ball']);
      this.possibleResults.push(Results['Rec. Err']);
    } else if (this.eventType == EventType['First Hit']) {
      this.possibleResults.push(Results.Pass);
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results['Dead Ball']);
      this.possibleResults.push(Results['Rec. Err']);
    } else if (this.eventType == EventType['Second Hit']) {
      this.possibleResults.push(Results.Set);
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results['BH Err']);
      this.possibleResults.push(Results['Atk Err']);
    } else if (this.eventType == EventType['Third Hit']) {
      this.possibleResults.push(Results.Kill);
      this.possibleResults.push(Results['Zero Atk']);
      this.possibleResults.push(Results['Free Ball']);
      this.possibleResults.push(Results['Atk Err']);
    } else if (this.eventType == EventType.Block) {
      this.possibleResults.push(Results.Block);
      this.possibleResults.push(Results['Zero Blk']);
      this.possibleResults.push(Results['Blk Touch']);
      this.possibleResults.push(Results['Blk Err']);
    }
  }

  onPlayerClick(key: string) {
    if (this.selectedPlayer == key) {
      this.selectedPlayer = "";
    } else {
      this.selectedPlayer = key;
    }
    // setTimeout(() => {
    //   this.selectedPlayer[key] = false;
    // }, 2000);
  }

  onResultClick(key: string) {
    if (this.selectedResult == key) {

    }
  }
}
