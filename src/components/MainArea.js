import React, { useRef, useState } from "react";
import { useEffect } from "react";
const MainArea = () => {
  const [guessText, setGuessText] = useState("");

  const onGuessTextChange = (e) => {
    setGuessText(e.target.value);
  };
  const mainSection = {
    height: "180px",
    background: "white",
    marginTop: "10px",
    marginBottom: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const inputStyle = {
    height: "36px",
    padding: "2px 4px",
  };

  const options = [
    "Lionel Messi",
    "Bruno Fernandes",
    "Jadon Sancho",
    "Marcus Rashford",
    "Kevin De Bruyne",
    "Kylian Mbappe",
  ];

  useEffect(() => {
    console.log("Getting input options");
  }, [guessText]);

  return (
    <div style={mainSection}>
      <div>Reveal Section</div>
      <input
        type="text"
        style={inputStyle}
        placeholder="Enter here"
        value={guessText}
        onChange={onGuessTextChange}
      />
      <datalist id="programmingLanguages">
        {options.map((lang) => (
          <option
            key={lang}
            value={lang}
            style={{
              position: "absolute",
              border: "1px solid #d4d4d4",
              borderBottom: "none",
              borderTop: "none",
              zIndex: "99",
              top: "100%",
              left: "0",
              right: "0",
            }}
          >
            {lang}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default MainArea;
