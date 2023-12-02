import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Game, GameRally, TeamScored } from "../ongoing-match/record-event/dto/game.dto";
import { PlayerResult, InGamePlayerShort } from "../ongoing-match/record-event/dto/player-result.dto";
import { Results } from "../ongoing-match/record-event/dto/button-text";
import { PlayerTeamLookupService } from "./player-team-lookup.service";

@Injectable()
export class GameService {
  private currentGame: Game;
  private rallyData: [number, boolean] = [1, true];
  gameId: number = 0;
  constructor(public playerTeamLookupService: PlayerTeamLookupService) {
    this.newDummyGame();
  }

  newDummyGame() {
    this.currentGame = new Game({
      gameId: 0,
      groupId: '37th Ward',
      gameName: 'Game 99',
      team1Name: 'Clowards',
      team2Name: 'Hyers',
      team1Score: 0,
      team2Score: 0,
      rallies: new Map<number, GameRally>(),
      team1Players: this.playerTeamLookupService.getPlayers(),
      team2Players: this.playerTeamLookupService.getPlayers(),
      startDate: new Date(),
      currentPossession: true
    });
    this.addEmptyRally(0,0);
  }

  setGame(game: Game, newGame: boolean) {
    this.currentGame = game;
    if (newGame) {
      this.addEmptyRally(0,0);
    }
  }

  getTeam1Players(): InGamePlayerShort[] {
    return this.currentGame.team1Players;
  }

  getTeam2Players(): InGamePlayerShort[] {
    return this.currentGame.team2Players;
  }

  setTeam1Players(team1Players: InGamePlayerShort[]): InGamePlayerShort[] {
    this.currentGame.team1Players = team1Players;
    return this.getTeam1Players();
  }

  setTeam2Players(team2Players: InGamePlayerShort[]): InGamePlayerShort[] {
    this.currentGame.team2Players = team2Players;
    return this.getTeam2Players();
  }

  getCurrentGame(): Observable<Game> {
    return of(this.currentGame);
  }

  getCurrentGameObject(): Game {
    return this.currentGame;
  }

  getCurrentRallyId(): Observable<[number, boolean]> {
    return of(this.rallyData);
  }

  setCurrentRallyId(rallyId: number, ongoingRally: boolean) {
    this.rallyData = [rallyId, ongoingRally];
  }
  //TODO: Upload to database
  setCurrentGame(updatedGame: Game) {
    this.currentGame = updatedGame;
  }

  //True: team 1's ball
  //False: team 2's ball
  switchPossession(): boolean {
    this.currentGame.currentPossession = !this.currentGame.currentPossession;
    return this.currentGame.currentPossession;
  }

  //Return rallyID
  //add a rally first
  addEmptyRally(currentTeam1Score: number, currentTeam2Score: number): number {
    const rallyId = this.currentGame.rallies.size + 1;
    let gameRally: GameRally = new GameRally({
      rallyId: rallyId,
      team1Name: this.currentGame.team1Name,
      team2Name: this.currentGame.team2Name,
      team1Score: currentTeam1Score,
      team2Score: currentTeam2Score,
      whichTeamScored: TeamScored.Unknown,
      events: new Map<number, PlayerResult>,
      finalResult: Results.Undecided,
    });
    console.log("Adding Empty Rally");
    console.log(gameRally);
    this.updateRally(rallyId, gameRally);
    return rallyId;
  }

  updateRally(rallyId: number, rally: GameRally) {
    let previousTeam1Score: number;
    let previousTeam2Score: number;
    if (rallyId == 1) {
      previousTeam1Score = 0;
      previousTeam2Score = 0;
    } else {
      previousTeam1Score = this.currentGame.rallies.get(rallyId-1).team1Score;
      previousTeam2Score = this.currentGame.rallies.get(rallyId-1).team2Score;
    }
    if (rally.whichTeamScored == 1){
      rally.team1Score = previousTeam1Score + 1;
      rally.team2Score = previousTeam2Score;
    } else if (rally.whichTeamScored == 2) {
      rally.team1Score = previousTeam1Score;
      rally.team2Score = previousTeam2Score + 1;
    }
    this.currentGame.rallies.set(rallyId, rally);
    this.calculateScores();
    this.calculatePossession();
  }

  //Currently unused
  undoRallyPoint(rallyId: number) {
    let rally: GameRally = this.currentGame.rallies.get(rallyId);
    if (rally.whichTeamScored != TeamScored.Unknown) {
      //Reset the rally if previous rally's point result was changed.
      rally.whichTeamScored = TeamScored.Unknown;
      rally.finalResult = Results.Undecided;
      rally.events = new Map<number, PlayerResult>;
      this.currentGame.rallies.set(rallyId, rally);
    }
  }

  /*
    Calculates total scores by adding all the rallies 
  */
  calculateScores(): [team1Points: number, team2Points: number] {
    const team1Sum = Array.from(this.currentGame.rallies.values()).filter(x => x.whichTeamScored == TeamScored["Team 1"]).length;
    const team2Sum = Array.from(this.currentGame.rallies.values()).filter(x => x.whichTeamScored == TeamScored["Team 2"]).length;
    this.currentGame.team1Score = team1Sum;
    this.currentGame.team2Score = team2Sum;
    return [team1Sum, team2Sum];
  }

  calculatePossession() {
    const numOfRallies: number = this.currentGame.rallies.size;
    for(let i = numOfRallies; i >= 1; i--){
      let teamScored: TeamScored = this.currentGame.rallies.get(i).whichTeamScored;
      if (teamScored == TeamScored["Team 1"]) {
        this.currentGame.currentPossession = true;
        break;
      } else if (teamScored == TeamScored["Team 2"]) {
        this.currentGame.currentPossession = false;
        break;
      }
    }
    return;
    
  }

  addEventToRally(playerResult: PlayerResult[], rallyId: number) {

  }

  team1Point(points: number): number {
    if (points > this.currentGame.team1Score){
      this.switchPossession();
    }
    this.currentGame.team1Score = points;
    return this.currentGame.team1Score;
  }
  
  team2Point(points: number): number {
    if (points > this.currentGame.team2Score){
      this.switchPossession();
    }
    this.currentGame.team2Score = points;
    return this.currentGame.team2Score;
  }
/*
  getDummyTeam1Data(): InGamePlayerShort[] {
    let players: InGamePlayerShort[] =
      [
        {
          playerId: "3412",
          firstName: "Munseok",
          lastName: "Kim",
          username: "munseokkim"
        },
        {
          playerId: "2341",
          firstName: "Alma",
          lastName: "Seo",
          username: "almaseo"
        },
        {
          playerId: "4321",
          firstName: "Matthew",
          lastName: "Vigilione",
          username: "mvig"
        },
        {
          playerId: "1234",
          firstName: "Jesus",
          lastName: "Pacheco",
          username: "jesuspacheco"
        },
        {
          playerId: "1",
          firstName: "Paige",
          lastName: "Darrow",
          username: "paige1"
        },
        {
          playerId: "12",
          firstName: "Alex",
          lastName: "Stapley",
          username: "alexs"
        },
        {
          playerId: "21",
          firstName: "Brendan",
          lastName: "Stapley",
          username: "brendanstaps"
        },
        {
          playerId: "9809",
          firstName: "Allison",
          lastName: "Harker",
          username: "ahark"
        },
      ];
    return players;
  }
  getDummyTeam2Data(): InGamePlayerShort[] {
    let players: InGamePlayerShort[] = 
      [
        new InGamePlayerShort('1', 'Colton', 'A', 'OH', '00'),
        new InGamePlayerShort('2', 'Alex', 'S', 'LIB', '14'),
        new InGamePlayerShort('3', 'Brendan', 'S', 'OH', '16'),
        new InGamePlayerShort('4', 'Haakan', 'H', 'MB', '11'),
        new InGamePlayerShort('5', 'Erika', 'H', 'S', '77'),
        new InGamePlayerShort('6', 'Isaac', 'C', 'OP', '09'),
      ];
      return players;
  }
*/
  
}