import appConsts from "../config/constants";

const { ACTIONS } = appConsts;

const movement = arr => ({
  type: ACTIONS.MOVE_TILE,
  payload: arr
});
const randomize = arr => ({
  type: ACTIONS.RANDOMIZE,
  payload: arr
});

const makeItEasy = () => ({
  type: ACTIONS.MAKE_IT_EASY
});

const solved = bool => ({
  type: ACTIONS.SOLVED,
  payload: bool
});
export { movement, randomize, makeItEasy, solved };
