import { InGamePlayerShort } from "src/app/ongoing-match/record-event/dto/player-result.dto";
import { PlayerPosition } from "src/app/position-select/position.enum";

export class PlayerLookupShort extends InGamePlayerShort {
  constructor(data?: PlayerLookupShort) {
    super(data.playerId, data.firstName, data.lastName, data.username, data.position);
    Object.assign(this, data);
  }

  svgUrl?: string;
  proPicColor?: string;
  proPicFontBlack?: boolean = true;
  jerseyNumber?: string;
}