import React from "react";
import "./Button.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SavedBtn = props => (
  <span className="btn btn-primary" {...props}>
    Save Article
  </span>
);

export default SavedBtn;