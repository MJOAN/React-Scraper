import React from "react";
import "./Button.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="btn btn btn-danger" {...props}>
    Delete Article
  </span>
);

export default DeleteBtn;

