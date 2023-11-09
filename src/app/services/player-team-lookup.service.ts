
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
        username: "munseokkim"
      },
      {
        playerId: "2341",
        firstName: "Alma",
        lastName: "Seo",
        username: "almaseo"
      },
      {
        playerId: "4321",
        firstName: "Matthew",
        lastName: "Vigilione",
        username: "mvig"
      },
      {
        playerId: "1234",
        firstName: "Jesus",
        lastName: "Pacheco",
        username: "jesuspacheco"
      },
      {
        playerId: "3412",
        firstName: "Munseok",
        lastName: "Kim",
        username: "munseokkim"
      },
      {
        playerId: "2341",
        firstName: "Alma",
        lastName: "Seo",
        username: "almaseo"
      },
      {
        playerId: "4321",
        firstName: "Matthew",
        lastName: "Vigilione",
        username: "mvig"
      },
      {
        playerId: "1234",
        firstName: "Jesus",
        lastName: "Pacheco",
        username: "jesuspacheco"
      },
      {
        playerId: "3412",
        firstName: "Munseok",
        lastName: "Kim",
        username: "munseokkim"
      },
      {
        playerId: "2341",
        firstName: "Alma",
        lastName: "Seo",
        username: "almaseo"
      },
      {
        playerId: "4321",
        firstName: "Matthew",
        lastName: "Vigilione",
        username: "mvig"
      },
      {
        playerId: "1234",
        firstName: "Jesus",
        lastName: "Pacheco",
        username: "jesuspacheco"
      },
    ];
  }
}