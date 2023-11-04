
//This is for accessing the general database of players and teams
//Used in finding players/teams without a user id associated

import { Injectable } from "@angular/core";

//Not used in friend's list or recently played
@Injectable()
export class PlayerTeamLookupService {
  constructor() {

  }

  //Needs to change to {teamName: teamId}
  getTeams(searchParameter: string): string[] {
    return ['Lakers', 'Magic', 'Heat'];
  }
}