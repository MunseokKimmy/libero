import { Injectable } from "@angular/core";
import { Game } from "../components/record-event/dto/game.dto";
import { Observable, of } from "rxjs";
import { InGamePlayerShort } from "../components/record-event/dto/player-result.dto";

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
      team1Players: [],
      team2Players: [],
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

  getDummyTeam1Data(): InGamePlayerShort[] {
    return [
      new InGamePlayerShort('1', 'Munseok', 'K', 'OH', '44'),
      new InGamePlayerShort('2', 'Jessie', 'K', 'OP', '21'),
      new InGamePlayerShort('3', 'Aldair', 'A', 'LIB', '1'),
      new InGamePlayerShort('4', 'Zabdi', 'H', 'MB', '09'),
      new InGamePlayerShort('5', 'Alma', 'S', 'S', '4'),
      new InGamePlayerShort('6', 'Jesus', 'P', 'OH', '07'),
    ];
  }
  getDummyTeam2Data(): InGamePlayerShort[] {
    return [
      new InGamePlayerShort('1', 'Colton', 'A', 'OH', '00'),
      new InGamePlayerShort('2', 'Alex', 'S', 'LIB', '14'),
      new InGamePlayerShort('3', 'Brendan', 'S', 'OH', '16'),
      new InGamePlayerShort('4', 'Haakan', 'H', 'MB', '11'),
      new InGamePlayerShort('5', 'Erika', 'H', 'S', '77'),
      new InGamePlayerShort('6', 'Isaac', 'C', 'OP', '09'),
    ];
  }

  
}