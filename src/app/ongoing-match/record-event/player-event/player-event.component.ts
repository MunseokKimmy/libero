import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Results } from '../dto/button-text';
import { EventType } from '../dto/event-type';
import { InGamePlayerShort, PlayerResult } from '../dto/player-result.dto';
import { ColorType } from 'src/app/components/buttons/icon-buttons/button-color';

@Component({
  selector: 'app-player-event',
  templateUrl: './player-event.component.html',
  styleUrls: ['./player-event.component.scss']
})
export class PlayerEventComponent {
  @Input() playerResult!: PlayerResult;
  @Input() players: InGamePlayerShort[] = [];
  @Output() selectedPlayerResult = new EventEmitter<PlayerResult>();

  results = Results;
  colorType = ColorType;
  eventTypeEnum = EventType;

  selectedIndexes: number[] = [];
  possibleResults: Results[] = [];
  resultIndexes: boolean[] = [];
  constructor() {
    //I think that I need to change this so RecordEvent feeds in the playerResult object here.
    //This class takes PlayerResult and adds in the player and the result when applicable. 
  }
  ngOnInit(): void {
    if (this.playerResult.eventType == EventType.Serve) {
      this.serveResultCheck();
    } else if (this.playerResult.eventType == EventType['Serve Receive']) {
      this.serveReceiveResultCheck();
    } else if (this.playerResult.eventType == EventType['First Hit']) {
      this.firstHitResultCheck();
    } else if (this.playerResult.eventType == EventType['Second Hit']) {
      this.secondHitEventCheck();
    } else if (this.playerResult.eventType == EventType['Third Hit']) {
      this.thirdHitEventCheck();
    } else if (this.playerResult.eventType == EventType.Block) {
      this.blockEventCheck();
    }
  }

  serveResultCheck() {
    this.possibleResults.push(Results['Zero Serve']);
    this.possibleResults.push(Results.Ace);
    this.possibleResults.push(Results['Serve Err']);
    if (this.playerResult.eventResult == Results.Undecided) {
      this.resultIndexes = [true, true, true];
    } else {
      switch(this.playerResult.eventResult){
        case Results['Zero Serve']: 
          this.resultIndexes = [true, false, false];
          break;
        case Results.Ace:
          this.resultIndexes = [false, true, false];
          break;
        case Results['Serve Err']:
          this.resultIndexes = [false, false, true];
          break;
        default: 
          break;
      } 
    }
  }

  serveReceiveResultCheck() {
    this.possibleResults.push(Results.Pass);
    this.possibleResults.push(Results['Zero Atk']);
    this.possibleResults.push(Results.Kill);
    this.possibleResults.push(Results['Free Ball']);
    this.possibleResults.push(Results['Dead Ball']);
    this.possibleResults.push(Results['Rec. Err']);
    if (this.playerResult.eventResult == Results.Undecided) {
      this.resultIndexes = [true, true, true, true, true, true]; 
    } else {
      switch(this.playerResult.eventResult){
        case Results.Pass: 
          this.resultIndexes = [true, false, false, false, false, false]; 
          break;
        case Results['Zero Atk']:
          this.resultIndexes = [false, true, false, false, false, false]; 
          break;
        case Results.Kill:
          this.resultIndexes = [false, false, true, false, false, false]; 
          break;
        case Results['Free Ball']: 
          this.resultIndexes = [false, false, false, true, false, false]; 
          break;
        case Results['Dead Ball']:
          this.resultIndexes = [false, false, false, false, true, false]; 
          break;
        case Results['Rec. Err']:
          this.resultIndexes = [false, false, false, false, false, true]; 
          break;
        default: 
          break;
      } 
    }
  }

  firstHitResultCheck() {
    this.possibleResults.push(Results.Pass);
    this.possibleResults.push(Results['Zero Atk']);
    this.possibleResults.push(Results.Kill);
    this.possibleResults.push(Results['Free Ball']);
    this.possibleResults.push(Results['Dead Ball']);
    this.possibleResults.push(Results['BH Err']);
    if (this.playerResult.eventResult == Results.Undecided) {
      this.resultIndexes = [true, true, true, true, true, true]; 
    } else {
      switch(this.playerResult.eventResult){
        case Results.Pass: 
          this.resultIndexes = [true, false, false, false, false, false]; 
          break;
        case Results['Zero Atk']:
          this.resultIndexes = [false, true, false, false, false, false]; 
          break;
        case Results.Kill:
          this.resultIndexes = [false, false, true, false, false, false]; 
          break;
        case Results['Free Ball']: 
          this.resultIndexes = [false, false, false, true, false, false]; 
          break;
        case Results['Dead Ball']:
          this.resultIndexes = [false, false, false, false, true, false]; 
          break;
        case Results['Rec. Err']:
          this.resultIndexes = [false, false, false, false, false, true]; 
          break;
        default: 
          break;
      } 
    }
  }

  secondHitEventCheck() {
    this.possibleResults.push(Results.Set);
    this.possibleResults.push(Results['Zero Atk']);
    this.possibleResults.push(Results.Kill);
    this.possibleResults.push(Results['Free Ball']);
    this.possibleResults.push(Results['BH Err']);
    this.possibleResults.push(Results['Atk Err']);
    if (this.playerResult.eventResult == Results.Undecided) {
      this.resultIndexes = [true, true, true, true, true, true]; 
    } else {
      switch(this.playerResult.eventResult){
        case Results.Pass: 
          this.resultIndexes = [true, false, false, false, false, false]; 
          break;
        case Results['Zero Atk']:
          this.resultIndexes = [false, true, false, false, false, false]; 
          break;
        case Results.Kill:
          this.resultIndexes = [false, false, true, false, false, false]; 
          break;
        case Results['Free Ball']: 
          this.resultIndexes = [false, false, false, true, false, false]; 
          break;
        case Results['Dead Ball']:
          this.resultIndexes = [false, false, false, false, true, false]; 
          break;
        case Results['Rec. Err']:
          this.resultIndexes = [false, false, false, false, false, true]; 
          break;
        default: 
          break;
      } 
    }
  }

  thirdHitEventCheck() {
    this.possibleResults.push(Results['Zero Atk']);
    this.possibleResults.push(Results.Kill);
    this.possibleResults.push(Results['Free Ball']);
    this.possibleResults.push(Results['Atk Err']);
    if (this.playerResult.eventResult == Results.Undecided) {
      this.resultIndexes = [true, true, true, true]; 
    } else {
      switch(this.playerResult.eventResult){
        case Results['Zero Atk']: 
          this.resultIndexes = [true, false, false, false]; 
          break;
        case Results.Kill:
          this.resultIndexes = [false, true, false, false]; 
          break;
        case Results['Free Ball']:
          this.resultIndexes = [false, false, true, false]; 
          break;
        case Results['Atk Err']: 
          this.resultIndexes = [false, false, false, true]; 
          break;
        default: 
          break;
      } 
    }
  }

  blockEventCheck() {
    this.possibleResults.push(Results['Zero Block']);
    this.possibleResults.push(Results['Block Touch']);
    this.possibleResults.push(Results.Block);
    this.possibleResults.push(Results['Block Err']);
    this.possibleResults.push(Results['No Block']);
    if (this.playerResult.eventResult == Results.Undecided) {
      this.resultIndexes = [true, true, true, true, true]; 
    } else {
      switch(this.playerResult.eventResult){
        case Results['Zero Block']: 
          this.resultIndexes = [true, false, false, false, false]; 
          break;
        case Results['Block Touch']:
          this.resultIndexes = [false, true, false, false, false]; 
          break;
        case Results.Block:
          this.resultIndexes = [false, false, true, false, false]; 
          break;
        case Results['Block Err']: 
          this.resultIndexes = [false, false, false, true, false]; 
          break;
        case Results['No Block']:
          this.resultIndexes = [false, false, false, false, true]; 
          break;
        default: 
          break;
      } 
    }
  }

  onPlayerClick(key: InGamePlayerShort) {
    if (this.playerResult.playerInfo == key) {
      this.playerResult.playerInfo = null;
    } else {
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
      this.selectedPlayerResult.emit(this.playerResult);
    }
  }
}
