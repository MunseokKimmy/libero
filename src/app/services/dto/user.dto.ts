export class User {
  constructor(data: User) {
    Object.assign(this, data);
  }

  userId: string;
  playerId: string;
  username: string;
  password: string; //Obviously salted and hashed
}