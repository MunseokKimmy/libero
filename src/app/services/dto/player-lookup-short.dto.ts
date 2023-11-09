export class PlayerLookupShort {
  constructor(data?: PlayerLookupShort) {
    Object.assign(this, data);
  }

  playerId: string;
  firstName: string;
  lastName: string;
  username: string;
  svgUrl?: string;
  proPicColor?: string;
  proPicFontBlack?: boolean = true;
}