import { Injectable } from "@angular/core";
import { Game, GameRally, TeamScored } from "../components/record-event/dto/game.dto";
import { Observable, of } from "rxjs";
import { InGamePlayerShort, PlayerResult } from "../components/record-event/dto/player-result.dto";

@Injectable()
export class GameService {
  currentGame$;
  currentGame: Game;
  //Temporary, in the future, needs to access gameId from URL
  gameId: number = 0;
  constructor() {
    this.newGame();
  }

  newGame() {
    this.currentGame = new Game({
      gameId: 0,
      groupId: '37th Ward',
      gameName: 'Game 99',
      team1Name: 'Clowards',
      team2Name: 'Hyers',
      team1Score: 0,
      team2Score: 0,
      rallies: [],
      team1Players: this.getDummyTeam1Data(),
      team2Players: this.getDummyTeam2Data(),
      startDate: new Date(),
      currentPossession: true
    });
  }

  getCurrentGame(): Observable<Game> {
    return of(this.currentGame);
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
  //Should we add a rally first, or when it's completed?
  addRally(): number {
    // let gameRally: GameRally = new GameRally({
    //   rallyId: rallyId,
    //   team1Score: this.currentGame.team1Score,
    //   team2Score: this.currentGame.team2Score,
    //   team1Name: ,
    //   team2Name: ,
    //   team1Possession: ,
    //   events: [],
    //   finalResult: ,
    // });
    // this.currentGame.rallies.push()
    return 0;
  }

  /*
    Calculates total scores by adding all the rallies 
  */
  calculateScores() {
    const team1Sum = this.currentGame.rallies.filter(x => x.whichTeamScored == TeamScored["Team 1"]).length;
    const team2Sum = this.currentGame.rallies.filter(x => x.whichTeamScored == TeamScored["Team 2"]).length;
    this.currentGame.team1Score = team1Sum;
    this.currentGame.team2Score = team2Sum;
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

  getDummyTeam1Data(): Map<InGamePlayerShort, boolean> {
    let players = new Map<InGamePlayerShort, boolean>(
      [
        [new InGamePlayerShort('1', 'Munseok', 'K', 'OH', '44'), true],
        [new InGamePlayerShort('2', 'Jessie', 'K', 'OP', '21'), true],
        [new InGamePlayerShort('3', 'Aldair', 'A', 'LIB', '1'), true],
        [new InGamePlayerShort('4', 'Zabdi', 'H', 'MB', '09'), true],
        [new InGamePlayerShort('5', 'Alma', 'S', 'S', '4'), true],
        [new InGamePlayerShort('6', 'Jesus', 'P', 'OH', '07'), true],
      ]);
    return players;
  }
  getDummyTeam2Data(): Map<InGamePlayerShort, boolean> {
    let players = new Map<InGamePlayerShort, boolean>(
      [
        [new InGamePlayerShort('1', 'Colton', 'A', 'OH', '00'), true],
        [new InGamePlayerShort('2', 'Alex', 'S', 'LIB', '14'), true],
        [new InGamePlayerShort('3', 'Brendan', 'S', 'OH', '16'), true],
        [new InGamePlayerShort('4', 'Haakan', 'H', 'MB', '11'), true],
        [new InGamePlayerShort('5', 'Erika', 'H', 'S', '77'), true],
        [new InGamePlayerShort('6', 'Isaac', 'C', 'OP', '09'), true],
      ]);
      return players;
  }

  
}