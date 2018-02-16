import React from "react";
import "../Button/Button.css";

export const SavedBtn = props =>
  <button {...props} style={{ float: "left" }} className="btn btn-primary">
    {props.children}
  </button>;
