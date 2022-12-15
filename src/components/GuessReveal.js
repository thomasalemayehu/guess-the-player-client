import React from "react";

const GuessReveal = ({ info }) => {
  const revealSection = {
    height: "55px",
    marginTop: "12px",
  };
  return <div style={revealSection}>{info}</div>;
};

export default GuessReveal;
