import React from "react";

const Container = ({
  area,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  justify,
  children
}) => {
  return (
    <div
      style={{
        gridArea: area,
        gridColumnStart: columnStart || 1,
        gridColumnEnd: columnEnd || 12,
        justifyItems: justify || "start"
      }}
    >
      {children}
    </div>
  );
};

export default Container;
