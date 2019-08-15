import React from "react";
import { connect } from "react-redux";
import ControlPanel from "./ControlPanel";
import TilesWrapper from "./TilesWrapper";
import PopUp from "./Pop-up";
import { playAgain, solved } from "../Actions/puzzleActions";
import appConsts from "../config/constants";
import { shuffleArray } from "../helpers/arrayShufller";
import "./Puzzle.css";

const { PUZZLE_CONFIG } = appConsts;

function Puzzle(props) {
  const { puzzleMap, puzzleSolved, solved, movesCount, createNewMap } = props;

  if (
    !solved &&
    JSON.stringify(puzzleMap) === JSON.stringify(PUZZLE_CONFIG.SOLVED_PUZZLE)
  ) {
    puzzleSolved(true);
  }

  const playAgainClickHandler = () => {
    createNewMap(shuffleArray(puzzleMap));
  };
  return (
    <div className="App">
      <div className="AppContainer">
        <TilesWrapper />
      </div>
      <div>
        <ControlPanel />
      </div>
      <div style={{ display: solved ? "contents" : "none" }}>
        <PopUp
          playAgainClickHandler={playAgainClickHandler}
          movesCounter={movesCount}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  puzzleSolved: bool => {
    dispatch(solved(bool));
  },
  createNewMap: arr => {
    dispatch(playAgain(arr));
  }
});
const mapStateToProps = state => state.puzzle;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzle);
