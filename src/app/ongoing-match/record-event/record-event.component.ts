import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventType } from './dto/event-type';
import { BlockResult, ServeResult } from './dto/event-result';
import { Game, GameRally, GameShort, TeamScored } from './dto/game.dto';
import { InGamePlayerShort, PlayerResult } from './dto/player-result.dto';
import { Results } from './dto/button-text';
import { EventService } from 'src/app/services/event.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-record-event',
  templateUrl: './record-event.component.html',
  styleUrls: ['./record-event.component.scss']
})

//Some ideas on how to implement:

export class RecordEventComponent implements OnInit {

  //This component controls the flow of the game recording
  //
  gameInfo: Game;
  eventTypeEnum = EventType;
  @Input() rallyId: number;
  @Output() endOfRallyInfo: EventEmitter<GameRally>;
  constructor(public eventService: EventService, public gameService: GameService, public cdr: ChangeDetectorRef) { }

  //EventId, PlayerResult
  //EventId is key because rallies are separated
  rallyEvents: Map<number, PlayerResult> = new Map<number, PlayerResult>();
  rallyKeys: number[] = [];
  team1: InGamePlayerShort[];
  team2: InGamePlayerShort[];
  ngOnInit(): void {
    this.gameService.getCurrentGame().subscribe(x => {
      this.gameInfo = x;
      this.team1 = Array.from(x.team1Players.keys());
      this.team2 = Array.from(x.team2Players.keys());
    });
    this.newRally(0, this.gameInfo.currentPossession);
  }

  //Here's the plan. 
  //I want to upload events as they happen, rather than a full rally at a time.
  //1. Every time an event is processed, call the service to the Real-time database.
  //2. Once a game is finished, then call the service to upload the entire game.
  //3. A game is split into rallies.
  //4. Rallies are split into events.
  //5. When an event is processed, check if there's an event after it already
  processEvent(event: PlayerResult, eventId: number) {
    let playerResult: PlayerResult = new PlayerResult(event);
    //Set the current event
    this.rallyEvents.set(eventId, playerResult);
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    if (!this.checkNextEventExists(event, eventId + 1)) {
      return;
    }
    let nextEvent: EventType = this.eventService.getNextEvent(event.eventResult);
    if (nextEvent == EventType['End of Rally']) {
      const whichTeamScored: TeamScored = this.findWhichTeamScored(event);
      let team1Score = this.gameInfo.team1Score;
      let team2Score = this.gameInfo.team2Score;
      if (whichTeamScored == TeamScored['Team 1']) {
        team1Score = team1Score++;
      } else if (whichTeamScored == TeamScored['Team 2']) {
        team2Score = team2Score++;
      }
      //Emit an event to the parent
      //I should check point totals *fairly* often.
      let gameRally: GameRally = new GameRally({
        rallyId: this.rallyId,
        team1Score: team1Score,
        team2Score: team2Score,
        whichTeamScored: whichTeamScored,
        events: Array.from(this.rallyEvents.values()),
        finalResult: event.eventResult
      }); 
      this.endOfRallyInfo.emit(gameRally);
    } else if (nextEvent == EventType['Serve Receive']) {
      this.newServeReceiveEvent(eventId + 1, !event.possession);
    } else if (nextEvent == EventType['First Hit']) {
      if (event.eventResult == Results['Block Touch']) {
        this.newFirstHitEvent(eventId + 1, event.possession);
      } else {
        this.newFirstHitEvent(eventId + 1, !event.possession);
      }
    } else if (nextEvent == EventType['Second Hit']) {
      this.newSecondHitEvent(eventId + 1, event.possession);
    } else if (nextEvent == EventType['Third Hit']) {
      this.newThirdHitEvent(eventId + 1, event.possession);
    } else if (nextEvent == EventType.Block) {
      this.newBlockEvent(eventId + 1, !event.possession);
    }
  }

  findWhichTeamScored(event: PlayerResult): TeamScored {
    switch(event.eventResult) {
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
    indexesToRemove.forEach(indexToRemove => {
      this.rallyEvents.delete(indexToRemove);
    });
    this.rallyKeys = Array.from(this.rallyEvents.keys());
    this.cdr.detectChanges();
    return true;
  }



  newRally(eventId: number, team: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType.Serve,
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

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
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());
  }

  newFirstHitEvent(eventId: number, team: boolean) {
    let newPlayerResult1: PlayerResult = new PlayerResult({
      eventId: eventId,
      gameId: this.gameInfo.gameId,
      playerInfo: this.rallyEvents.get(eventId)?.playerInfo,
      eventType: EventType['First Hit'],
      eventResult: Results.Undecided,
      possession: team,
      rallyId: this.rallyId
    });
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

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
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());

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
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());
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
    this.rallyEvents.set(eventId, newPlayerResult1);
    this.rallyKeys = Array.from(this.rallyEvents.keys());
  }
}
