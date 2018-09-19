import React from "react";
import "./Button.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const SavedBtn = props => (
  <span className="saved-btn" {...props}>
    ✓
  </span>
);

