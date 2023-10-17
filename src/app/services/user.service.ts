import { PlayerProfile } from "./dto/player-profile.dto";
import { User } from "./dto/user.dto";

export class UserService {
  constructor(){

  }

  getCurrentUser(): User {
    return new User({
      playerId: 'mkim47',
      userId: 'mkim47',
      username: 'munseokkim98',
      password: '!@#$!@#$!@#$!@#$'
    });
  }
  
  getCurrentPlayerProfile(): PlayerProfile {
    return new PlayerProfile({
      playerId: 'mkim47',
      userId: 'mkim47',
    });
  }

  getUser(userId: string): User {
    return new User({
      playerId: 'jessicakim97',
      userId: userId,
      username: 'jessicakim97',
      password: '!@#$!@#$!@#$!@#$'
    });
  }

  getPlayerProfile(playerId: string): PlayerProfile {
    return new PlayerProfile({
      playerId: playerId,
      userId: 'jessicakim97',
    });
  }

  getFriends(userId: string) {

  }

  getRecentlyPlayedWith(userId: string) {

  }


}