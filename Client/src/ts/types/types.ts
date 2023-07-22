export type Cars = {
  name: string,
  color: string,
  id: number,
};

export type StartStop = {
  velocity: number,
  distance: number,
}

export type Drive = {
  succes: boolean,
}

export type Winners = {
  id: number,
  wins: number,
  time: number,
}

export type UpdatedWinner = {
  wins: number,
  time: number,
}