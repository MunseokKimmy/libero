export class PlayerProfile {
  constructor(data?: PlayerProfile) {
    Object.assign(this, data);
  }

  playerId: string;
  userId: string; 
}