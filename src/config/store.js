import { createStore, combineReducers } from "redux";
import puzzleReducer from "../reducers/puzzleReducer";

const rootReducer = combineReducers({
  puzzle: puzzleReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
