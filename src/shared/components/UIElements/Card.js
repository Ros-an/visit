import React from "react";

import "./Card.css";

const Card = (props) => {
  console.log("ye mera card props as a child", props);
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
