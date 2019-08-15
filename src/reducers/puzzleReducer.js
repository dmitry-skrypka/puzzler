import appConsts from "../config/constants";

const { ACTIONS, PUZZLE_CONFIG } = appConsts;

const initialState = {
  puzzleMap: [0, 10, 2, 3,'BORDER', 4, 5, 6, 7,'BORDER',8, 9, 1, 11,'BORDER', 12, 13, 14, 15],
  movesCount: 0,
  imageSize: PUZZLE_CONFIG.IMAGE_SIZE,
  tileSize: PUZZLE_CONFIG.TILE_SIZE,
  puzzleSideSize: PUZZLE_CONFIG.PUZZLE_SIDE_SIZE,
  solved: false,
};

const puzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.MOVE_TILE:
      return {
        ...state,
        puzzleMap: action.payload,
        movesCount: state.movesCount+1,
      };
    case ACTIONS.RANDOMIZE:
      return {
        ...state,
        puzzleMap: action.payload,
        movesCountCount: 0,
      };
    case ACTIONS.MAKE_IT_EASY:
      return {
        ...state,
        puzzleMap: PUZZLE_CONFIG.EASY_PUZZLE,
        movesCountCount: 0,
      };
    case ACTIONS.SOLVED:
      return {
        ...state,
        // puzzleMap: initialState.puzzleMap,
        solved: action.payload,
      };
    default:
      return state;
  }
};

export default puzzleReducer;
