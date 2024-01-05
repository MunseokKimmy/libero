
//This is for accessing the general database of players and teams
//Used in finding players/teams without a user id associated

import { Injectable } from "@angular/core";
import { PlayerLookupShort } from "./dto/player-lookup-short.dto";
import { PlayerPosition } from "../position-select/position.enum";

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
    if (searchParameter == "1") {
      return [
        {
          playerId: "3412",
          firstName: "Kobe",
          lastName: "Bryant",
          username: "kobebean",
          proPicColor: "#FFA655",
          position: PlayerPosition.OH
        },
        {
          playerId: "2341",
          firstName: "Dennis",
          lastName: "Shroeder",
          username: "dennisthemenace",
          proPicColor: "#88D381",
          position: PlayerPosition.SET
        },
        {
          playerId: "4321",
          firstName: "Anthony",
          lastName: "Davis",
          username: "streetclothes",
          proPicColor: "#779FE5",
          position: PlayerPosition.MID
        },
        {
          playerId: "1234",
          firstName: "Earvin",
          lastName: "Johnson",
          username: "magic",
          proPicColor: "#299AA7",
          position: PlayerPosition.OP
        },
        {
          playerId: "1",
          firstName: "Jimmy",
          lastName: "Butler",
          username: "himmy",
          proPicColor: "#88D381",
          position: PlayerPosition.OH
        },
        {
          playerId: "12",
          firstName: "Shaquille",
          lastName: "O'Neal",
          username: "diesel",
          proPicColor: "#779FE5",
          position: PlayerPosition.MID
        },
        {
          playerId: "21",
          firstName: "Max",
          lastName: "Strus",
          username: "strusisloose",
          proPicColor: "#299AA7",
          position: PlayerPosition.LIB
        },
        {
          playerId: "9809",
          firstName: "Bam",
          lastName: "Adebayo",
          username: "outofthebayou",
          proPicColor: "#FFA655",
          position: PlayerPosition.OP
        },
        {
          playerId: "24",
          firstName: "Duncan",
          lastName: "Robinson",
          username: "drob",
          proPicColor: "#299AA7",
          position: PlayerPosition.LIB
        },
        {
          playerId: "25",
          firstName: "Tyler",
          lastName: "Herro",
          username: "jackharlow",
          proPicColor: "#FFA655",
          position: PlayerPosition.OP
        },
      ];
    } else {

      return [
        {
          playerId: "3412",
          firstName: "Munseok",
          lastName: "Kim",
          username: "munseokkim",
          proPicColor: "#FFA655",
          position: PlayerPosition.OH
        },
        {
          playerId: "2341",
          firstName: "Alma",
          lastName: "Seo",
          username: "almaseo",
          proPicColor: "#88D381",
          position: PlayerPosition.SET
        },
        {
          playerId: "4321",
          firstName: "Matthew",
          lastName: "Vigilione",
          username: "mvig",
          proPicColor: "#779FE5",
          position: PlayerPosition.MID
        },
        {
          playerId: "1234",
          firstName: "Jesus",
          lastName: "Pacheco",
          username: "jesuspacheco",
          proPicColor: "#299AA7",
          position: PlayerPosition.OP
        },
        {
          playerId: "1",
          firstName: "Paige",
          lastName: "Darrow",
          username: "paige1",
          proPicColor: "#88D381",
          position: PlayerPosition.OH
        },
        {
          playerId: "12",
          firstName: "Alex",
          lastName: "Stapley",
          username: "alexs",
          proPicColor: "#779FE5",
          position: PlayerPosition.LIB
        },
        {
          playerId: "21",
          firstName: "Brendan",
          lastName: "Stapley",
          username: "brendanstaps",
          proPicColor: "#299AA7",
          position: PlayerPosition.MID
        },
        {
          playerId: "9809",
          firstName: "Allison",
          lastName: "Harker",
          username: "ahark",
          proPicColor: "#FFA655",
          position: PlayerPosition.OP
        },
      ];
    }
  }
}