import { PlayerProfile } from "./dto/player-profile.dto";
import { User } from "./dto/user.dto";

export class UserService {
  constructor(){

  }
  //Dummy data

  getCurrentUser(): User {
    return new User({
      playerId: 'mkim47',
      userId: 'mkim47',
      username: 'munseokkim98',
      password: '!@#$!@#$!@#$!@#$'
    });
  }
  //Dummy data
  
  getCurrentPlayerProfile(): PlayerProfile {
    return new PlayerProfile({
      playerId: 'mkim47',
      userId: 'mkim47',
    });
  }
  //Dummy data

  getUser(userId: string): User {
    return new User({
      playerId: 'jessicakim97',
      userId: userId,
      username: 'jessicakim97',
      password: '!@#$!@#$!@#$!@#$'
    });
  }
  //Dummy data

  getPlayerProfile(playerId: string): PlayerProfile {
    return new PlayerProfile({
      playerId: playerId,
      userId: 'jessicakim97',
    });
  }
  //Dummy data
  getFriends(playerId: string): PlayerProfile[] {
    const friend1: PlayerProfile = {
      userId: "almaseo",
      playerId: "almaseo",
    };
    const friend2: PlayerProfile = {
      userId: "mattvigilione",
      playerId: "mattvigilione",
    };
    const friend3: PlayerProfile = {
      userId: "jesuspacheco",
      playerId: "goatpapi",
    };
    return [
      friend1, friend2, friend3
    ];
  }

  getRecentlyPlayedWith(playerId: string): PlayerProfile[] {
    const friend1: PlayerProfile = {
      userId: "aldairalej",
      playerId: "aldairalej",
    };
    const friend2: PlayerProfile = {
      userId: "kerriganbeag",
      playerId: "kerriganbeag",
    };
    const friend3: PlayerProfile = {
      userId: "jesuspacheco",
      playerId: "goatpapi",
    };
    return [
      friend1, friend2, friend3
    ];
  }

  getPlayerRecommendations(playerId: string) : PlayerProfile[] {
    let recommendations: PlayerProfile[] = [];
    recommendations.push(this.getCurrentPlayerProfile());
    recommendations.concat(this.getFriends(playerId));
    recommendations.concat(this.getRecentlyPlayedWith(playerId));
    return recommendations;
  }

}