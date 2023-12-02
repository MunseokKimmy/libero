
//This is for accessing the general database of players and teams
//Used in finding players/teams without a user id associated

import { Injectable } from "@angular/core";
import { PlayerLookupShort } from "./dto/player-lookup-short.dto";

//Not used in friend's list or recently played
@Injectable()
export class PlayerTeamLookupService {
  constructor() {

  }

  //Needs to change to {teamName: teamId}
  getTeams(searchParameter: string): string[] {
    return ['Lakers', 'Magic', 'Heat'];
  }

  getPlayers(searchParameter?: string): PlayerLookupShort[] {
    return [
      {
        playerId: "3412",
        firstName: "Munseok",
        lastName: "Kim",
        username: "munseokkim",
        proPicColor: "#FFA655"
      },
      {
        playerId: "2341",
        firstName: "Alma",
        lastName: "Seo",
        username: "almaseo",
        proPicColor: "#88D381"
      },
      {
        playerId: "4321",
        firstName: "Matthew",
        lastName: "Vigilione",
        username: "mvig",
        proPicColor: "#779FE5"
      },
      {
        playerId: "1234",
        firstName: "Jesus",
        lastName: "Pacheco",
        username: "jesuspacheco",
        proPicColor: "#299AA7"
      },
      {
        playerId: "1",
        firstName: "Paige",
        lastName: "Darrow",
        username: "paige1",
        proPicColor: "#88D381"
      },
      {
        playerId: "12",
        firstName: "Alex",
        lastName: "Stapley",
        username: "alexs",
        proPicColor: "#779FE5"
      },
      {
        playerId: "21",
        firstName: "Brendan",
        lastName: "Stapley",
        username: "brendanstaps",
        proPicColor: "#299AA7"
      },
      {
        playerId: "9809",
        firstName: "Allison",
        lastName: "Harker",
        username: "ahark",
        proPicColor: "#FFA655"
      },
    ];
  }
}