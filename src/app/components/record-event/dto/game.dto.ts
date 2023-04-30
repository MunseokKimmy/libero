export class GameShort {
  constructor(data?: GameShort) {
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
}