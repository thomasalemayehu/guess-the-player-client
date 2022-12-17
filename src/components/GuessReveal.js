import React from "react";
import PropTypes from "prop-types";
import ImageGuessCircle from "./ImageGuessCircle";
import TextGuessCircle from "./TextGuessCircle";
import NumberGuessCircle from "./NumberGuessCircle";
import "../styles/GuessReveal.css";
import {API_IMAGE_BASE_URL,COUNTRY_FLAG_BASE_URL} from "../CONSTANTS.js"
const GuessReveal = ({
  nationality,
  nationalityCheck,
  league,
  leagueCheck,
  team,
  teamCheck,
  position,
  positionCheck,
  age,
  ageCheck,
  shirtNumber,
  shirtNumberCheck,
}) => {


  return (
    <div className="reveal__area__container">
      {/* Nationality */}
      <ImageGuessCircle
        check={nationalityCheck}
        width="30px"
        height="30px"
        imageUrl={`${COUNTRY_FLAG_BASE_URL}/${nationality}`}
      />

      <ImageGuessCircle
        check={leagueCheck}
        imageUrl={`${API_IMAGE_BASE_URL}/${league}`}
        width="30px"
        height="30px"
      />

      {/* Team */}
      <ImageGuessCircle
        check={teamCheck}
        imageUrl={`${API_IMAGE_BASE_URL}/${team}`}
        width="33px"
        height="33px"
      />

      {/* Position */}
      <TextGuessCircle check={positionCheck} position={position} />

      {/* Age */}
      <NumberGuessCircle number={age} numberCheck={ageCheck} />

      {/* Shirt Number */}
      <NumberGuessCircle number={shirtNumber} numberCheck={shirtNumberCheck} />
    </div>
  );
};

GuessReveal.propTypes = {
  position: PropTypes.string.isRequired,
  positionCheck: PropTypes.bool.isRequired,

  team: PropTypes.string.isRequired,

  teamCheck: PropTypes.bool.isRequired,
};

export default GuessReveal;
