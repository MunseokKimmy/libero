import { Results } from "./button-text";
import { EventType } from "./event-type";

export class PlayerResult {
  constructor(data?: PlayerResult) {
    Object.assign(this, data);
  }

  gameId: number;
  rallyId: number;
  eventId: number;
  playerInfo: InGamePlayerShort;
  eventType: EventType;
  eventResult: Results;
  possession: boolean;
}

export class InGamePlayerShort {
  constructor(playerId: string, firstName: string, lastName: string, position?: string, number?: string) {
    this.playerId = playerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.number = number;
  }
  playerId: string;
  firstName: string;
  lastName: string;
  position?: string;
  number?: string;
  inGame?: boolean = false;
}
