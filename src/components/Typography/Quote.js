import React from "react";
import "./Quote.scss";

const Quote = ({ children, cite }) => {
  return (
    <blockquote>
      <p className="quote">{children}</p>
      {cite && <cite className="caption">{cite}</cite>}
    </blockquote>
  );
};

export default Quote;
