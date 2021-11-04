export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const HORIZONTAL_AXIS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
];

export const GRID_SIZE = 100;

export function samePosition(p1: Position, p2: Position) {
  return p1.x === p2.x && p1.y === p2.y;
}

export interface Position {
  x: number;
  y: number;
}

export enum PieceType {
  PAWN, //convertir en dama (basandose en reina)
  QUEEN, //convertir en dama reina (basandose en reina)
}

export enum TeamType {
  OPPONENT,
  OUR,
}

export interface Piece {
  image: string;
  position: Position;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
}

export const initialBoardState: Piece[] = [
  //row: 0
  {
    image: "../img/black.png",
    position: {
      x: 0,
      y: 0,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 2,
      y: 0,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 4,
      y: 0,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 6,
      y: 0,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 8,
      y: 0,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },

  //row: 1
  {
    image: "../img/black.png",
    position: {
      x: 1,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 3,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 5,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 7,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 9,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },

  //row: 2
  {
    image: "../img/black.png",
    position: {
      x: 0,
      y: 2,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 2,
      y: 2,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 4,
      y: 2,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 6,
      y: 2,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: "../img/black.png",
    position: {
      x: 8,
      y: 2,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },

  //Oponente
  //row: 7
  {
    image: "../img/red.png",
    position: {
      x: 1,
      y: 7,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 3,
      y: 7,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 5,
      y: 7,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 7,
      y: 7,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 9,
      y: 7,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },

  //row: 6
  {
    image: "../img/red.png",
    position: {
      x: 0,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 2,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 4,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 6,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 8,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },

  //row: 5
  {
    image: "../img/red.png",
    position: {
      x: 1,
      y: 5,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 3,
      y: 5,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 5,
      y: 5,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 7,
      y: 5,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "../img/red.png",
    position: {
      x: 9,
      y: 5,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
];
