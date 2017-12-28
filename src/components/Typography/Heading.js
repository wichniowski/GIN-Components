import React from "react";
import "./Heading.scss";

const Heading = ({ type, subheading, children }) => {
  return React.createElement(
    type,
    { className: subheading && "subheading" },
    children
  );
};

export default Heading;
