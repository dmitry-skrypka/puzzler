import solvedImage from "../assets/solved.gif";
import React from "react";

const PopUp = props => {
  const { movesCounter, playAgainClickHandler } = props;
  const clickHandler = () => {
    playAgainClickHandler(false);
  };
  return (
    <div className="popUp">
      <div className="popUpContent">
        <img src={solvedImage} alt="^.^" />
        <div>
          You've solved my puzzle with only{" "}
          {movesCounter === 1
            ? `${movesCounter} move`
            : `${movesCounter} moves`}
        </div>
        <div className="button" onClick={clickHandler}>
          PLAY AGAIN
        </div>
      </div>
    </div>
  );
};

export default PopUp;
