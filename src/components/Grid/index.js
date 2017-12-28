import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const gridNames = {
  app: "gin-app-grid",
  general: "gin-general-grid"
};

const getGridNameByType = type => gridNames[type] || gridNames.general;

const Grid = ({ type, children }) => {
  return <div className={getGridNameByType(type)}>{children}</div>;
};

Grid.propTypes = {
  type: PropTypes.oneOf(["app", "general"]),
  children: PropTypes.node
};

export default Grid;
