import { Injectable } from "@angular/core";
import { Game } from "../components/record-event/dto/game.dto";
import { Observable } from "rxjs";

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
      startDate: new Date(),
      currentPossession: true
    });
  }

  getCurrentGame(): Game {
    return this.currentGame;
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
    this.currentGame.team1Score = points;
    return this.currentGame.team1Score;
  }
  team2Point(points: number): number {
    this.currentGame.team2Score = points;
    return this.currentGame.team2Score;
  }
}