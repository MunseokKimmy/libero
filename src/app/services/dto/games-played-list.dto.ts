import { GameRally } from "src/app/ongoing-match/record-event/dto/game.dto";
import { InGamePlayerShort } from "src/app/ongoing-match/record-event/dto/player-result.dto";

export class GamesPlayedList {
  constructor(data?: GamesPlayedList) {
    Object.assign(this, data);
  }

  games: CompletedGameShort[];
}

export class CompletedGameShort {
  constructor(data?: CompletedGameShort) {
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
      team1Players: InGamePlayerShort[];
      team2Players: InGamePlayerShort[];
      //All rallies
      rallies: Map<number, GameRally>;
      startDate: Date;

}