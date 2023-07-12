import React from "react";
import "./input.scss";

const EyeIcon = (props) => {
  return props.open ? (
    <i className="mdi mdi-eye-outline"></i>
  ) : (
    <i className="mdi mdi-eye-off-outline"></i>
  );
};

export default EyeIcon;
