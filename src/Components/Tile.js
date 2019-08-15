import image from "../assets/defaultPuzzleImage.jpg";
import React from "react";

const Tile = props => {
  const { tileIndex, tile, tileMovementHandler, imageSize, puzzleSideSize,tileSize } = props;
  const side = imageSize / puzzleSideSize;
  const blankElement = tile === 0;
  const x = (tile % puzzleSideSize) * side;
  const y = Math.floor(tile / puzzleSideSize) * side;
  const handleClick = () => {
    tileMovementHandler(tileIndex);
  };
  return (
    <div
      role="button"
      onClick={tile === 0 ? null : handleClick}
      style={{
        width: `${tileSize}px`,
        height: `${tileSize}px`,
        margin: "0 2px 2px",
        backgroundImage: `url(${image})`,
        backgroundPosition: `-${x}px -${y}px`,
        opacity: `${!blankElement ? "1" : "0.2"}`,
        cursor: `${blankElement ? "default" : "pointer"}`,
        textAlign: "center"
      }}
    >
      <span className="emptyCell"> {blankElement ? "EMPTY" : null}</span>
    </div>
  );
};

export default Tile;
