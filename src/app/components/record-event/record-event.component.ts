import { Component, OnInit } from '@angular/core';
import { GameHistoryItem } from './dto/game-history-item.dto';
import { EventType } from './dto/event-type';
import { BlockResult, ServeResult } from './dto/event-result';
import { GameShort } from './dto/game.dto';
import { InGamePlayerShort } from './player-event/player-result.dto';

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
    new InGamePlayerShort('1', 'Munseok', 'K', 'OH', 44),
    new InGamePlayerShort('2', 'Jessie', 'K', 'OP', 44),
    new InGamePlayerShort('3', 'Aldair', 'A', 'LIB', 44),
    new InGamePlayerShort('4', 'Zabdi', 'H', 'MB', 44),
    new InGamePlayerShort('5', 'Alma', 'S', 'S', 44),
    new InGamePlayerShort('6', 'Jesus', 'P', 'OH', 44),
  ];
  constructor() { }

  history: GameHistoryItem[] = [];
  // , 'Serve Receive', 'Second Hit', 'Third Hit', 'Dig'];
  ngOnInit(): void {
    this.gameInfo = new GameShort();
    this.gameInfo.gameId = "game-1";
    this.gameInfo.gameName = "Scrimmage";
    this.gameInfo.team1Name = "Team 1";
    this.gameInfo.team2Name = "Team 2";
    this.gameInfo.team1Score = 0;
    this.gameInfo.team2Score = 0;
    let newGameHistoryItem: GameHistoryItem = {
      historyId: 0,
      rallyId: 0,
      playerId: 0,
      playerName: '',
      gameShort: this.gameInfo,
      eventType: EventType.Serve
    };
    this.history.push(newGameHistoryItem);
    console.log(this.history);
  }

  processEvent(event: GameHistoryItem) {
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

  serveEvent(serveHistoryItem: GameHistoryItem) {
    if (serveHistoryItem.serveResult == ServeResult.Ace) {
      
    } else if (serveHistoryItem.serveResult == ServeResult['Service Error']) {

    } else if (serveHistoryItem.serveResult == ServeResult['Zero Serve']) {

    }
  }

  serveReceiveEvent(serveReceiveHistoryItem: GameHistoryItem) {

  }

  firstHitEvent(firstHitEventItem: GameHistoryItem) {

  }

  secondHitEvent(secondHitEventItem: GameHistoryItem) {

  }

  thirdHitEvent(thirdHitEventItem: GameHistoryItem) {

  }

  blockEvent(blockEventItem: GameHistoryItem) {
    if (blockEventItem.blockResult == BlockResult['Zero Block']) {
      
    } else if (blockEventItem.blockResult == BlockResult['Block Touch']) {

    } else if (blockEventItem.blockResult == BlockResult.Block) {

    } else if (blockEventItem.blockResult == BlockResult['Block Error']) {

    }
  }

  newRally(previousEventItem: GameHistoryItem) {
    let gameShort = this.gameInfo;
    let newGameHistoryItem: GameHistoryItem = {
      historyId: previousEventItem.historyId++,
      rallyId: previousEventItem.rallyId++,
      playerId: 0,
      playerName: '',
      gameShort: gameShort,
      eventType: EventType.Serve
    };
    this.history.push(newGameHistoryItem);
  }
}
