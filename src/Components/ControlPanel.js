import React from "react";
import { swap } from "../helpers/arrayElemsSwapper";
import { connect } from "react-redux";
import { makeItEasy, movement, randomize } from "../Actions/puzzleActions";
import { shuffleArray } from "../helpers/arrayShufller";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  randomizeClickHandler = () => {
    const { randomizeTiles, puzzleMap } = this.props;
    randomizeTiles(shuffleArray(puzzleMap));
  };

  makeItEasyClickHandler = () => {
    const { makeEasy } = this.props;
    makeEasy();
  };

  render() {
    const { movesCounter } = this.props;
    return (
      <div style={{ margin: 20, width: 200 }} className="tilesWrapper">
        <div style={{ margin: 20, textAlign: "center" }}>
          <div>Moves: {movesCounter}</div>
          <div
            role="button"
            className="button"
            onClick={this.randomizeClickHandler}
          >
            RANDOMIZE
          </div>

          <div
            role="button"
            className="button"
            onClick={this.makeItEasyClickHandler}
          >
            MAKE IT EASY
          </div>
        </div>
      </div>
    );
  }
}
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
