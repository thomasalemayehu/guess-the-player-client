import React from "react";
import PropTypes from "prop-types";
import "../styles/ImageGuessCircle.css"
const ImageGuessCircle = ({ check, imageUrl, width, height }) => {
 
  const imgStyle = {
    width: width,
    height: height,
  };
  return (
    <div
      className={`image__guess__circle ${
        check ? "correct__guess" : "incorrect__guess"
      }`}
    >
      <img src={imageUrl}  style={imgStyle} />
    </div>
  );
};

ImageGuessCircle.propTypes = {
  check: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ImageGuessCircle;
