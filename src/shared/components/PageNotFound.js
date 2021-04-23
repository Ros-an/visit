import React from "react";
import { Link } from "react-router-dom";

const customStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "60vh",
  alignItems: "center",
  color: "white",
};
const errorPageStyle = {
  maxWidth: "17rem",
  background: "white",
  fontWeight: "500",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  color: "blue",
  marginTop: "0",
};

const errorHeading = {
  fontSize: "5rem",
  margin: "0",
  padding: "0",
};
function PageNotFound() {
  return (
    <div style={customStyle}>
      <h1 style={errorHeading}>404</h1>
      <h1 style={errorPageStyle}>
        this is not the webpage you are looking for.
      </h1>
      <Link to="/">home</Link>
    </div>
  );
}

export default PageNotFound;
