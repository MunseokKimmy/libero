import { EventType } from "@angular/router";
import { Results } from "./button-text";
import { InGamePlayerShort, PlayerResult } from "./player-result.dto";

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
      gameId: number;
      //ID of the group
      groupId: string;
      gameName: string;
      //Team 1 Name, may move to short
      team1Name: string;
      //Team 2 Name
      team2Name: string;
      //Team 1 Score
      team1Score: number;
      //Team 2 Score
      team2Score: number;
      //Players
      team1Players: Map<InGamePlayerShort, boolean>;
      team2Players: Map<InGamePlayerShort, boolean>;
      //All rallies
      rallies: Map<number, GameRally>;
      startDate: Date;
      //True = Team 1 possession
      //False = Team 2 possession
      currentPossession: boolean = true;
}

export class PlayerStats {
  player: InGamePlayerShort;
  playerId: string; //Make it accessible
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
  rallyId: number;
  team1Score: number;
  team2Score: number;
  team1Name?: string;
  team2Name?: string;
  whichTeamScored: TeamScored;
  events: PlayerResult[];
  finalResult: Results;
  constructor(data?: GameRally) {
    Object.assign(this, data);
  } 
}

export enum TeamScored {
  Unknown = 0,
  "Team 1" = 1,
  "Team 2" = 2
}
