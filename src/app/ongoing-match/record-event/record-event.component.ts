import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventType } from './dto/event-type';
import { Game, GameRally, TeamScored } from './dto/game.dto';
import { InGamePlayerShort, PlayerResult } from './dto/player-result.dto';
import { Results } from './dto/button-text';
import { EventService } from 'src/app/services/event.service';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-record-event',
  templateUrl: './record-event.component.html',
  styleUrls: ['./record-event.component.scss']
})

//Some ideas on how to implement:

export class RecordEventComponent implements OnInit, AfterViewChecked, OnChanges {

  //This component controls the flow of the game recording
  gameInfo: Game;
  eventTypeEnum = EventType;
  @Input() rallyId: number;
  @Output() endOfRallyInfo: EventEmitter<GameRally> = new EventEmitter<GameRally>();
  constructor(public eventService: EventService, public gameService: GameService, public cdr: ChangeDetectorRef) { }

  //EventId, PlayerResult
  //EventId is key because rallies are separated
  rallyEvents: Map<number, PlayerResult> = new Map<number, PlayerResult>();
  rallyKeys: number[] = [];
  team1: InGamePlayerShort[];
  team2: InGamePlayerShort[];
  currentRally: GameRally;
  ngOnInit(): void {
    let currentGame: Game = this.gameService.getCurrentGameObject();
    this.gameInfo = currentGame;
    this.team1 = Array.from(currentGame.team1Players.keys());
    this.team2 = Array.from(currentGame.team2Players.keys());
    this.currentRally = currentGame.rallies.get(this.rallyId);
    this.rallyEvents = this.currentRally.events;
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    if (this.rallyEvents.size == 0) {
      this.addEmptyEvent(0, this.gameInfo.currentPossession);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (!changes['rallyId'].firstChange) {
      console.log(this.rallyId);
      this.rallyId = changes['rallyId'].currentValue;
      this.updateCurrentRally();
    }
  }

  ngAfterViewChecked(): void {
    this.scroll(this.rallyKeys.length - 1);
  }

  updateCurrentRally() {
    let currentGame: Game = this.gameService.getCurrentGameObject();
    this.gameInfo = currentGame;
    this.currentRally = currentGame.rallies.get(this.rallyId);
    this.rallyEvents = this.currentRally.events;
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    if (this.rallyEvents.size == 0) {
      this.addEmptyEvent(0, this.gameInfo.currentPossession);
    }
  }

  //Here's the plan. 
  //I want to upload events as they happen, rather than a full rally at a time.
  //1. Every time an event is processed, call the service to the Real-time database.
  //2. Once a game is finished, then call the service to upload the entire game.
  //3. A game is split into rallies.
  //4. Rallies are split into events.
  //5. When an event is processed, check if there's an event after it already
  processEvent(event: PlayerResult, eventId: number) {
    //Set the current event
    if (!this.checkNextEventExists(event, eventId + 1)) {
      return;
    }
    let nextEvent: EventType = this.eventService.getNextEvent(event.eventResult);
    if (nextEvent == EventType['End of Rally']) {
      this.handleEndOfRally(event);
    } else {
      if (nextEvent == EventType['Serve Receive']) {
        this.newServeReceiveEvent(eventId + 1, !event.possession);
      } else if (nextEvent == EventType['First Hit']) {
        if (event.eventResult == Results['Block Touch'] || event.eventResult == Results['No Block']) {
          this.newFirstHitEvent(eventId + 1, event.possession, false);
        } else {
          this.newFirstHitEvent(eventId + 1, !event.possession, true);
        }
      } else if (nextEvent == EventType['Second Hit']) {
        this.newSecondHitEvent(eventId + 1, event.possession);
      } else if (nextEvent == EventType['Third Hit']) {
        this.newThirdHitEvent(eventId + 1, event.possession);
      } else if (nextEvent == EventType.Block) {
        this.newBlockEvent(eventId + 1, !event.possession);
      }
      this.checkRallyScoreIsEmpty();
    } 
  }
  
  checkRallyScoreIsEmpty(){
    this.gameService.undoRallyPoint(this.rallyId);
    this.gameService.calculateScores();
  }

  handleEndOfRally(event: PlayerResult) {
    const whichTeamScored: TeamScored = this.findWhichTeamScored(event);
    this.currentRally.whichTeamScored = whichTeamScored;
    this.currentRally.finalResult = event.eventResult;
    this.endOfRallyInfo.emit(this.currentRally);
    this.updateCurrentRally();
  }

  findWhichTeamScored(event: PlayerResult): TeamScored {
    switch (event.eventResult) {
      case Results.Ace:
        return event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      case Results['Atk Err']:
        return !event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      case Results['BH Err']:
      case Results.Block:
        return event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      case Results['Block Err']:
        return !event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      case Results.Kill:
        return event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      case Results['Dead Ball']:
        return !event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      case Results['Rec. Err']:
        return !event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      case Results['Serve Err']:
        return !event.possession ? TeamScored['Team 1'] : TeamScored['Team 2'];
      default:
        return TeamScored.Unknown;
    }
  }

  scroll(nextEle: number) {
    let nextElementName = "event" + (nextEle).toString();
    let el: HTMLElement = document.getElementById(nextElementName);
    if (el == null) {
      return;
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  //False: Do nothing (Event exists already)
  //True: Add the new event
  checkNextEventExists(eventResult: PlayerResult, nextEventId: number): boolean {
    if (!this.rallyEvents.has(nextEventId)) {
      return true;
    }
    let nextEvent: PlayerResult = this.rallyEvents.get(nextEventId);
    if (eventResult.eventType != EventType.Block && this.eventService.getNextEvent(eventResult.eventResult) == nextEvent.eventType) {
      return false;
    }
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    const index = this.rallyKeys.indexOf(nextEventId);
    const indexesToRemove: number[] = this.rallyKeys.slice(index);
    console.log(indexesToRemove);
    indexesToRemove.forEach(indexToRemove => {
      this.rallyEvents.delete(indexToRemove);
    });
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    this.cdr.detectChanges();
    return true;
  }

  //Happens after every single event
  setRallyEventData(eventId: number, event: PlayerResult) {
    this.rallyEvents.set(eventId, event);
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    this.currentRally.events = this.rallyEvents;
    console.log("Set Rally Event Data");
    this.gameService.updateRally(this.rallyId, this.currentRally);
  }

  addEmptyEvent(eventId: number, team: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType.Serve,
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    this.setRallyEventData(eventId, newPlayerResult1);
  }

  newServeReceiveEvent(eventId: number, team: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType['Serve Receive'],
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    this.gameService.switchPossession();
    this.setRallyEventData(eventId, newPlayerResult1);
  }

  newFirstHitEvent(eventId: number, team: boolean, switchPossession: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType['First Hit'],
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    if (switchPossession) {
      this.gameService.switchPossession();
    }
    this.setRallyEventData(eventId, newPlayerResult1);

  }

  newSecondHitEvent(eventId: number, team: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType['Second Hit'],
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    this.setRallyEventData(eventId, newPlayerResult1);

  }

  newThirdHitEvent(eventId: number, team: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType['Third Hit'],
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    this.setRallyEventData(eventId, newPlayerResult1);

  }

  newBlockEvent(eventId: number, team: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType.Block,
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    this.setRallyEventData(eventId, newPlayerResult1);

  }
}
