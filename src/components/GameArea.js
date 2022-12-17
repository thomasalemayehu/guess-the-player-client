import React from "react";
import GuessReveal from "./GuessReveal";
import MainArea from "./MainArea";
import "../styles/GameArea.css";
import { useSelector, useDispatch } from "react-redux";

import { startNewGameSession } from "../service/guess.services";
import { newGameSessionAction } from "../state/actions/guess.actions";
const GameArea = () => {
  const dispatch = useDispatch();

  const guesses = useSelector((state) => state.guess.guesses);
  const gameSession = useSelector((state) => state.guess.gameSession);
 
  const onStartGame = () => {
    startNewGameSession()
      .then((response) => dispatch(newGameSessionAction(response.data.id)))
      .catch((e) => {});
  };

  if (gameSession) {
    return (
      <div className="game__area__container ">
        <div className="game__session__live__indicator">Game is live!</div>
        <MainArea />

        <div className="game__area__guess__display">
          {guesses.map((guessInfo) => (
            <GuessReveal key={guessInfo.guess.id} {...guessInfo.guess} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="game__area__container game__area__not__started">
        <button className="start__new__game__button" onClick={onStartGame}>
          Start a new game
        </button>
      </div>
    );
  }
};

export default GameArea;
