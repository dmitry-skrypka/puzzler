import appConsts from "../config/constants";
import { shuffleArray } from "../helpers/arrayShufller";

const { ACTIONS, PUZZLE_CONFIG } = appConsts;

const initialState = {
  puzzleMap: shuffleArray(PUZZLE_CONFIG.SOLVED_PUZZLE),
  movesCount: 0,
  imageSize: PUZZLE_CONFIG.IMAGE_SIZE,
  tileSize: PUZZLE_CONFIG.TILE_SIZE,
  puzzleSideSize: PUZZLE_CONFIG.PUZZLE_SIDE_SIZE,
  solved: false
};

const puzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.MOVE_TILE:
      return {
        ...state,
        puzzleMap: action.payload,
        movesCount: state.movesCount + 1
      };
    case ACTIONS.RANDOMIZE:
      return {
        ...state,
        puzzleMap: action.payload,
        movesCount: 0
      };
    case ACTIONS.MAKE_IT_EASY:
      return {
        ...state,
        puzzleMap: PUZZLE_CONFIG.EASY_PUZZLE,
        movesCount: 0
      };
    case ACTIONS.SOLVED:
      return {
        ...state,
        solved: action.payload
      };
    case ACTIONS.PLAY_AGAIN:
      return {
        ...state,
        puzzleMap: action.payload,
        solved: false
      };
    default:
      return state;
  }
};

export default puzzleReducer;
