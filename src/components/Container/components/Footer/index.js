import React from "react";
import "./styles.scss";

const Footer = ({ children }) => {
  return (
    <div className="gin-footer" role="footer">
      {children}
    </div>
  );
};

export default Footer;
