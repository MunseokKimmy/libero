import { EventType } from "@angular/router";
import { Results } from "./button-text";
import { InGamePlayerShort } from "./player-result.dto";

export class GameShort {
  constructor(data?: GameShort) {
    Object.assign(this, data);
  }
    //ID of the Game
    gameId: number;
    gameName: string;
    //Team 1 Name, may move to short
    team1Name: string;
    //Team 2 Name
    team2Name: string;
    //Team 1 Score
    team1Score: number;
    //Team 2 Score
    team2Score: number;
}

export class Game {
  constructor(data?: Game) {
    Object.assign(this, data);
  }
      //ID of the Game
      gameId: string;
      gameName: string;
      //Team 1 Name, may move to short
      team1Name: string;
      //Team 2 Name
      team2Name: string;
      //Team 1 Score
      team1Score: number;
      //Team 2 Score
      team2Score: number;
      //All rallies
      rallies: GameRally[];
}

export class PlayerStats {
  player: InGamePlayerShort;
  ace: number = 0;
  kill: number = 0;
  assist: number = 0;
  block: number = 0;
  dig: number = 0;
  serveError: number = 0;
  ballHandlingError: number = 0;
  attackError: number = 0;
  blockError: number = 0;
  serveReceiveError: number = 0;
}

export class TeamStats {
  freeBall: number = 0;
}

export class GameRally {
  team1Score: number;
  team2Score: number;
  team1Name: string;
  team2Name: string;
  team1Possession: boolean;
  events: GameEvent[];
  finalResult: Results;
}

export class GameEvent {
  constructor(data?: GameEvent) {
    Object.assign(this, data);
  }
  gameId: string;
  rallyId: number;
  //EventID can be gameId-eventId combined
  eventId: number;
  eventType: EventType;
  result: Results;
  player: InGamePlayerShort;
}