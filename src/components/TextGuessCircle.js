import React from "react";
import "../styles/TextCircleGuess.css";
const TextGuessCircle = ({ position, check }) => {
  return (
    <div
      className={`text__guess__circle ${
        check ? "correct__guess" : "incorrect__guess"
      }`}
    >
      <div>{position}</div>
    </div>
  );
};

export default TextGuessCircle;
