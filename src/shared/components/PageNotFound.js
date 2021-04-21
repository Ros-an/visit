import React from "react";
import { Link } from "react-router-dom";

const customStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  overflow: "hidden",
  alignItems: "center",
};
function PageNotFound() {
  return (
    <div style={customStyle}>
      <h1>Error 404: Page not found</h1>
      <Link to="/">home</Link>
    </div>
  );
}

export default PageNotFound;
