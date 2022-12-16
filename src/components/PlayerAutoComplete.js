import React from "react";
import PropTypes from "prop-types";
import "../styles/PlayerAutoComplete.css";
const PlayerAutoComplete = ({ value, team, position, nationality }) => {
  return (
    <div className="player__auto__complete__container">
      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <img
            className="player__auto__complete__country"
            src={`http://localhost:5000/${team}`}
            alt={team}
          />
        </div>
        <div>
          <div className="player__auto__complete__name">{value}</div>
        </div>
      </div>
      <div className="player__auto__complete_position">{position}</div>
    </div>
  );
};

PlayerAutoComplete.propTypes = {
  value: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
};

export default PlayerAutoComplete;
