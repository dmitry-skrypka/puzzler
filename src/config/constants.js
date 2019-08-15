class appConsts {
  static ACTIONS = {
    MOVE_TILE: "MOVE_TILE",
    RANDOMIZE: "RANDOMIZE",
    MAKE_IT_EASY: "MAKE_IT_EASY",
    SOLVED: "SOLVED",
    PLAY_AGAIN: "PLAY_AGAIN"
  };
  static PUZZLE_CONFIG = {
    IMAGE_SIZE: 800,
    TILE_SIZE: 200,
    PUZZLE_SIDE_SIZE: 4,
    EASY_PUZZLE: [
      1,
      0,
      2,
      3,
      "BORDER",
      4,
      5,
      6,
      7,
      "BORDER",
      8,
      9,
      10,
      11,
      "BORDER",
      12,
      13,
      14,
      15
    ],
    SOLVED_PUZZLE: [
      0,
      1,
      2,
      3,
      "BORDER",
      4,
      5,
      6,
      7,
      "BORDER",
      8,
      9,
      10,
      11,
      "BORDER",
      12,
      13,
      14,
      15
    ]
  };
}

export default appConsts;
