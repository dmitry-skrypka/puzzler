import React from "react";
import Tile from "./Tile";
import { movement } from "../Actions/puzzleActions";
import { connect } from "react-redux";
import { swap } from "../helpers/arrayElemsSwapper";
import {shuffleArray} from "../helpers/arrayShufller";

class TilesWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  tileMovementHandler = tileIndex => {
    const { puzzleMap, moveTile } = this.props;

    if (
      puzzleMap[tileIndex + 1] === 0 ||
      puzzleMap[tileIndex - 1] === 0 ||
      puzzleMap[tileIndex + 5] === 0 ||
      puzzleMap[tileIndex - 5] === 0
    ) {
      return moveTile(swap(puzzleMap, tileIndex));
    }

    return console.log("movement denied");
  };
  render() {
    const { puzzleMap, imageSize, tileSize, puzzleSideSize } = this.props;

    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", maxWidth: 816, margin: 20 }}
        className="tilesWrapper"
      >
        {puzzleMap.map((tile, tileIndex) => {
          if (tile !== "BORDER")
            return (
              <Tile
                tileMovementHandler={this.tileMovementHandler}
                tile={tile}
                tileIndex={tileIndex}
                imageSize={imageSize}
                tileSize={tileSize}
                puzzleSideSize={puzzleSideSize}
                blankElement={tile === 0}
                key={tileIndex}
              />
            );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  moveTile: arr => {
    dispatch(movement(arr));
  }
});
const mapStateToProps = state => state.puzzle;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TilesWrapper);
