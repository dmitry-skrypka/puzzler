import React from "react";
import Tile from "./Tile";
import { movement } from "../Actions/puzzleActions";
import { connect } from "react-redux";
import { swap } from "../helpers/arrayElemsSwapper";

const TilesWrapper = props => {
  const { puzzleMap, imageSize, tileSize, puzzleSideSize, moveTile } = props;
  const tileMovementHandler = tileIndex => {
    if (
      puzzleMap[tileIndex + 1] === 0 ||
      puzzleMap[tileIndex - 1] === 0 ||
      puzzleMap[tileIndex + 5] === 0 ||
      puzzleMap[tileIndex - 5] === 0
    ) {
      moveTile(swap(puzzleMap, tileIndex));
      return;
    }

    return console.log("movement denied");
  };

  return (
    <div className="tilesWrapper">
      {puzzleMap.map((tile, tileIndex) => {
        if (tile !== "BORDER")
          return (
            <Tile
              tileMovementHandler={tileMovementHandler}
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
};

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
