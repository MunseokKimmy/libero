import { Component, OnInit } from '@angular/core';
import { EventType } from './dto/event-type';
import { BlockResult, ServeResult } from './dto/event-result';
import { GameShort } from './dto/game.dto';
import { InGamePlayerShort, PlayerResult } from './dto/player-result.dto';
import { Results } from './dto/button-text';

@Component({
  selector: 'app-record-event',
  templateUrl: './record-event.component.html',
  styleUrls: ['./record-event.component.scss']
})

//Some ideas on how to implement:

export class RecordEventComponent implements OnInit {

  //This component controls the flow of the game recording
  //
  gameInfo: GameShort;
  eventTypeEnum = EventType;
  players: InGamePlayerShort[] = [
    new InGamePlayerShort('1', 'Munseok', 'K', 'OH', "44"),
    new InGamePlayerShort('2', 'Jessie', 'K', 'OP', "21"),
    new InGamePlayerShort('3', 'Aldair', 'A', 'LIB', "1"),
    new InGamePlayerShort('4', 'Zabdi', 'H', 'MB', "09"),
    new InGamePlayerShort('5', 'Alma', 'S', 'S', "4"),
    new InGamePlayerShort('6', 'Jesus', 'P', 'OH', "07"),
  ];
  constructor() { }

  history: PlayerResult[] = [];
  // , 'Serve Receive', 'Second Hit', 'Third Hit', 'Dig'];
  ngOnInit(): void {
    this.gameInfo = new GameShort();
    this.gameInfo.gameId = "game-1";
    this.gameInfo.gameName = "Scrimmage";
    this.gameInfo.team1Name = "Team 1";
    this.gameInfo.team2Name = "Team 2";
    this.gameInfo.team1Score = 0;
    this.gameInfo.team2Score = 0;
    this.newRally();
    console.log(this.history);
  }

  processEvent(event: PlayerResult) {
    const eventType: EventType = event.eventType;
    switch (eventType) {
      case EventType.Serve:
        this.serveEvent(event);
        break;
    
      case EventType['Serve Receive']:
        
        break;
    
      case EventType['First Hit']:
        
        break;
    
      case EventType['Second Hit']:
        
        break;
    
      case EventType['Third Hit']:
        
        break;
    
      case EventType.Block:
        
        break;
    
      default:
        break;
    }
  }

  serveEvent(serveHistoryItem: PlayerResult) {
    if (serveHistoryItem.eventResult == Results.Ace) {
      this.newRally();
    } else if (serveHistoryItem.eventResult == Results['Zero Serve']) {

    } else if (serveHistoryItem.eventResult == Results['Serve Err']) {
      this.newRally();
    }
  }

  serveReceiveEvent(serveReceiveHistoryItem: PlayerResult) {

  }

  firstHitEvent(firstHitEventItem: PlayerResult) {

  }

  secondHitEvent(secondHitEventItem: PlayerResult) {

  }

  thirdHitEvent(thirdHitEventItem: PlayerResult) {

  }

  blockEvent(blockEventItem: PlayerResult) {

  }

  newRally() {
    let newPlayerResult1: PlayerResult = {
      eventId: '',
      gameId: '',
      playerInfo: undefined,
      eventType: EventType.Serve,
      eventResult: Results.Undecided
    };
    this.history.push(newPlayerResult1);
  }
}
