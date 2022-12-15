import React from "react";
import GuessReveal from "./GuessReveal";
import MainArea from "./MainArea";

const GameArea = () => {
  const mainStyle = {
    width: "600px",
    height: "550px",
    padding: "0 8%",
  };

  const scrollableSection = {
    overflow: "auto",
    height: "calc(550px - 180px - 70px - 20px)",
    marginBottom: "20px",
  };

  return (
    <div style={mainStyle}>
      <MainArea />
      <div style={scrollableSection}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((guess) => (
          <GuessReveal key={guess} info={"Guess" + guess} />
        ))}
      </div>
    </div>
  );
};

export default GameArea;
