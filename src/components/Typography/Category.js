import React from "react";
import "./Category.scss";

const Category = ({ children, primary }) => {
  return (
    <span className={primary ? "category category__primary" : "category"}>
      {children}
    </span>
  );
};

export default Category;
