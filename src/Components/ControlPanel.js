import React from "react";
import { connect } from "react-redux";
import { makeItEasy, randomize } from "../Actions/puzzleActions";
import { shuffleArray } from "../helpers/arrayShufller";

const ControlPanel = props => {
  const { movesCount, randomizeTiles, puzzleMap, makeEasy } = props;
  const randomizeClickHandler = () => {
    randomizeTiles(shuffleArray(puzzleMap));
  };

  const makeItEasyClickHandler = () => {
    makeEasy();
  };

  return (
    <div className="tilesWrapper">
      <div style={{ margin: 20, textAlign: "center" }}>
        <div>Moves: {movesCount}</div>
        <div role="button" className="button" onClick={randomizeClickHandler}>
          RANDOMIZE
        </div>

        <div role="button" className="button" onClick={makeItEasyClickHandler}>
          MAKE IT EASY
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  randomizeTiles: arr => {
    dispatch(randomize(arr));
  },
  makeEasy: () => {
    dispatch(makeItEasy());
  }
});
const mapStateToProps = state => state.puzzle;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
