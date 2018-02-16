import React from "react";

export const ListItem = props =>
<div>
  <li className="list-group-item list-group-item-action flex-column align-items-start">
    {props.children}  
  </li>
 </div>;

