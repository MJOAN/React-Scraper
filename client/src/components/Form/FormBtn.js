import React from "react";
import "../Button/Button.css";

export const FormBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-primary btn-lg">
    {props.children}
  </button>;
