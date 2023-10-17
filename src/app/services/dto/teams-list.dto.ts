export class TeamsList {
  constructor() {

  }

  teams: TeamShort[];
}

export class TeamShort {
  constructor(data?: TeamShort) {
    Object.assign(this, data);
  }

  teamId: string;
  playerIds: string[];
  
}