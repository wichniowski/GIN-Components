import React from "react";
import "./Paragraph.scss";

const Paragraph = ({ children, textAlign }) => {
  return <p style={{ textAlign: textAlign }}>{children}</p>;
};

export default Paragraph;
