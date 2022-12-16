import React from "react";
import GuessReveal from "./GuessReveal";
import MainArea from "./MainArea";
import "../styles/GameArea.css"
import {  useSelector } from "react-redux";
const GameArea = () => {
  const guesses = useSelector(state=> state.guess.guesses);
  console.log(guesses);

  return (
    <div className="game__area__container">
      <MainArea />
      <div className="game__area__guess__display">
        {guesses.map((guess) => (
          <GuessReveal key={guess} info={"Guess" + guess.guess} />
        ))}
      </div>
    </div>
  );
};

export default GameArea;
