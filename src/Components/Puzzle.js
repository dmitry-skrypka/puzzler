import React from "react";

import "./Puzzle.css";
import ControlPanel from "./ControlPanel";
import TilesWrapper from "./TilesWrapper";
import PopUp from "./Pop-up";
import { movement, solved } from "../Actions/puzzleActions";
import { connect } from "react-redux";
import appConsts from "../config/constants";

const { PUZZLE_CONFIG } = appConsts;

function Puzzle(props) {
  const { puzzleMap, puzzleSolved, solved, movesCount } = props;

  if (
    JSON.stringify(puzzleMap) === JSON.stringify(PUZZLE_CONFIG.SOLVED_PUZZLE)
  ) {
    puzzleSolved(true);
  }
const playAgainClickHandler = () => {
    puzzleSolved(false);
}
  console.log(movesCount)
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: 900,
          justifyContent: "center"
        }}
      >
        <TilesWrapper />
      </div>
      <div>
        <ControlPanel />
      </div>
        <div style={{display: solved ? "contents" : 'none' }}>
      <PopUp playAgainClickHandler={playAgainClickHandler} movesCounter={movesCount}  />
        </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  puzzleSolved: bool => {
    dispatch(solved(bool));
  }
});
const mapStateToProps = state => state.puzzle;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzle);
