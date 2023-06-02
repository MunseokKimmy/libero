import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventType } from './dto/event-type';
import { BlockResult, ServeResult } from './dto/event-result';
import { GameShort } from './dto/game.dto';
import { InGamePlayerShort, PlayerResult } from './dto/player-result.dto';
import { Results } from './dto/button-text';
import { EventService } from 'src/app/services/event.service';

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
  constructor(public eventService: EventService, public cdr: ChangeDetectorRef) { }

  //EventId, PlayerResult
  //EventId is key because rallies are separated
  rallyEvents: Map<number, PlayerResult> = new Map<number, PlayerResult>();
  rallyKeys: number[] = [];
  // , 'Serve Receive', 'Second Hit', 'Third Hit', 'Dig'];
  ngOnInit(): void {
    this.gameInfo = new GameShort();
    this.gameInfo.gameId = 1;
    this.gameInfo.gameName = "Scrimmage";
    this.gameInfo.team1Name = "Team 1";
    this.gameInfo.team2Name = "Team 2";
    this.gameInfo.team1Score = 0;
    this.gameInfo.team2Score = 0;
    this.newRally(0);
    console.log(this.rallyEvents);
  }

  //Here's the plan. 
  //I want to upload events as they happen, rather than a full rally at a time.
  //1. Every time an event is processed, call the service to the Real-time database.
  //2. Once a game is finished, then call the service to upload the entire game.
  //3. A game is split into rallies.
  //4. Rallies are split into events.
  //5. When an event is processed, check if there's an event after it already
  processEvent(event: PlayerResult, eventId: number) {
    console.log(event);
    let playerResult: PlayerResult = new PlayerResult(event);
    //Set the current event
    this.rallyEvents.set(eventId, playerResult);
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    console.log(this.rallyEvents);
    if (!this.checkNextEventExists(event.eventResult, eventId + 1)) {
      return;
    }
    let nextEvent: EventType = this.eventService.getNextEvent(event.eventResult);
    if (nextEvent == EventType.Serve) {
      //this.newRally(event.eventId);
    } else if (nextEvent == EventType['Serve Receive']) {
      this.newServeReceiveEvent(event.eventId + 1);
    } else if (nextEvent == EventType['First Hit']) {
      this.newFirstHitEvent(event.eventId + 1);
    } else if (nextEvent == EventType['Second Hit']) {
      this.newSecondHitEvent(event.eventId + 1);
    } else if (nextEvent == EventType['Third Hit']) {
      this.newThirdHitEvent(event.eventId + 1);
    } else if (nextEvent == EventType.Block) {
      this.newBlockEvent(event.eventId + 1);
    }
    console.log(this.rallyKeys);
  }
  //False: Do nothing (Event exists already)
  //True: Add the new event
  //However, I do need to figure out what to do when the future event exists but it's not the same.
  //This method needs to rethought out.
  //1. Based on the current result, check if the next event matches 
  checkNextEventExists(eventResult: Results, eventId: number): boolean {
    if (!this.rallyEvents.has(eventId + 1)) {
      return true;
    }
    let nextEvent: PlayerResult = this.rallyEvents.get(eventId + 1);
    if (this.eventService.getNextEvent(eventResult) == nextEvent.eventType) {
      return false;
    }
    //Missing here, remove keys if next event isn't right

    return true;
  }



  newRally(eventId: number) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: undefined,
      eventType: EventType.Serve,
      eventResult: Results.Undecided
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

  }

  newServeReceiveEvent(eventId: number) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: undefined,
      eventType: EventType['Serve Receive'],
      eventResult: Results.Undecided
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());
  }

  newFirstHitEvent(eventId: number) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: undefined,
      eventType: EventType['First Hit'],
      eventResult: Results.Undecided
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

  }

  newSecondHitEvent(eventId: number) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: undefined,
      eventType: EventType['Second Hit'],
      eventResult: Results.Undecided
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

  }

  newThirdHitEvent(eventId: number) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: undefined,
      eventType: EventType['Third Hit'],
      eventResult: Results.Undecided
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

  }

  newBlockEvent(eventId: number) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: undefined,
      eventType: EventType.Block,
      eventResult: Results.Undecided
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

  }
}
