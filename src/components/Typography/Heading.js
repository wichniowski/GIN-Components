import React from "react";
import "./Heading.scss";

const Heading = ({ type, subheading, children }) => {
  return React.createElement(
    type ? type : "H1",
    { className: subheading && "subheading" },
    children
  );
};

export default Heading;
