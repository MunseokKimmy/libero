export enum ServeResult {
  //Other team's possession
  "Zero Serve" = 0,
  //Stat
  "Ace" = 1,
  //Errors
  "Service Error" = 2
}

export enum ServeReceiveResult {
  "Pass" = 0,
  //Other team's possession
  "Free Ball" = 1,
  "Zero Attack" = 2,
  //Stat
  "Kill" = 3,
  //Errors
  "Reception Error" = 4,
  "Dead Ball" = 5
}

export enum SecondHitResult {
  "Set" = 0,
  //Other team's possession
  "Free Ball" = 1,
  "Zero Attack" = 2,
  //Stat
  "Kill" = 3,
  //Errors
  "Ball Handling Error" = 4,
  "Attack Error" = 5
}

export enum ThirdHitResult {
  "Free Ball" = 0,
  "Zero Attack" = 1,
  "Kill" = 2,
  "Attack Error" = 3
}

export enum BlockResult {
  //Other team's possession
  "Zero Block" = 0,
  //Same team's possession
  "Block Touch" = 1,
  //Stat
  "Block" = 2,
  //Error
  "Block Error" = 3
}

export enum FirstHitResult {
  "Pass" = 0,
  //Other team's possession
  "Free Ball" = 1,
  "Zero Attack" = 2,
  //Stat
  "Kill" = 3,
  //Errors
  "Reception Error" = 4,
  "Dead Ball" = 5
}