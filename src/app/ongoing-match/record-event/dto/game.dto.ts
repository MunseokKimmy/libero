import { EventType } from "@angular/router";
import { Results } from "./button-text";
import { InGamePlayerShort, PlayerResult } from "./player-result.dto";
import { FormationSixes } from "src/app/position-select/formation.enum";

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
      team1: TeamInfo;
      team2: TeamInfo;
      //Team 1 Name, may move to short
      // team1Name: string;
      // //Team 2 Name
      // team2Name: string;
      // //Team 1 Score
      // team1Score: number;
      // //Team 2 Score
      // team2Score: number;
      // //Players
      // team1Players: InGamePlayerShort[];
      // team2Players: InGamePlayerShort[];
      //All rallies
      rallies: Map<number, GameRally>;
      startDate: Date;
      //True = Team 1 possession
      //False = Team 2 possession
      currentPossession: boolean = true;
}

export class TeamInfo {
  constructor(data?: TeamInfo) {
    Object.assign(this, data);
  }
  players: Map<number, InGamePlayerShort>; //playerId
  formation: FormationSixes;
  rotations: number = 0; //Who knows 
  teamScore: number;
  teamName: string;

}
//Not sure if necessary
export class TeamInfoShort {
  constructor(data?: TeamInfo) {
    Object.assign(this, data);
  }
  formation: FormationSixes;
  rotations: number = 0; //Who knows 
  teamScore: number;
  teamName: string;
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
  constructor(data?: GameRally) {
    Object.assign(this, data);
  } 
  rallyId: number;
  team1Name?: string;
  team2Name?: string;
  team1Score: number = 0; //Optional only when score has not been inputted yet.
  team2Score: number = 0;
  whichTeamScored: TeamScored;
  events: Map<number, PlayerResult>;
  finalResult: Results;
}

export enum TeamScored {
  Unknown = 0,
  "Team 1" = 1,
  "Team 2" = 2
}
