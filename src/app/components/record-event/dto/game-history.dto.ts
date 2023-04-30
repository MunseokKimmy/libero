import { GameHistoryItem } from "./game-history-item.dto";

export class GameHistory {
  constructor(data?: GameHistory) {
    Object.assign(this, data);
  }

  gameId: string;
  historyItems: GameHistoryItem[];
  rallyCount: number;
}