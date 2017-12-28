import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ onClick, text, type }) => {
  return (
    <button className="gin-button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(["cta", "ctaSmall"])
};

export default Button;
