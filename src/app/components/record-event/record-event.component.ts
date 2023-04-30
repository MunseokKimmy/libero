import { Component, OnInit } from '@angular/core';
import { GameHistoryItem } from './dto/game-history-item.dto';
import { EventType } from './dto/event-type';
import { ServeResult } from './dto/event-result';
import { GameShort } from './dto/game.dto';

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
  constructor() { }

  history: GameHistoryItem[] = [];
  // , 'Serve Receive', 'Second Hit', 'Third Hit', 'Dig'];
  ngOnInit(): void {
    
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
