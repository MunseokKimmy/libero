import { BlockResult, FirstHitResult, SecondHitResult, ServeReceiveResult, ServeResult, ThirdHitResult } from "./event-result";
import { EventType } from "./event-type";
import { GameShort } from "./game.dto";

export class GameHistoryItem {
  constructor(data?: GameHistoryItem) {
    Object.assign(this, data);
  }
  //ID of the History Item itself
  historyId: number;
  //ID of the Rally (Each Point)
  rallyId: number;

  //ID of the Organization/Group
  organizationId?: number;
  //PlayerID of the person making the play
  playerId: number;
  //Name of player making the play
  playerName: string;
  //Jersey number of the player if they have one
  playerNumber?: number;
  gameShort: GameShort;
  serveResult?: ServeResult;
  serveReceiveResult?: ServeReceiveResult;
  firstHitResult?: FirstHitResult;
  secondHitResult?: SecondHitResult;
  thirdHitResult?: ThirdHitResult;
  blockResult?: BlockResult;
  eventType: EventType;
}