import React from "react";
import "../styles/NumberGuessCircle.css";
const NumberGuessCircle = ({ number, numberCheck }) => {
  const styler = {
    display: "flex",
    gap: "2px",
    alignItems: "center",
    fontSize:"16px",
  };
  return (
    <div
      className={`number__guess_circle ${
        numberCheck===0 ? "correct__guess" : "incorrect__guess"
      }`}
    >
      <div style={styler}>
        <div style={{ fontSize: "18px" }}>{number}</div>
    
    
        {numberCheck === 0 ? <></> : numberCheck < 0 ? <>-</> : <>+</>}
      </div>
    </div>
  );
};

export default NumberGuessCircle;
