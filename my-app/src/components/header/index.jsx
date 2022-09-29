import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  const headerStyle = {
    width: "100%",
    padding: "2%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    display: "flex",
  };

  return (
    <div
      style={headerStyle}
      className="justify-content-between align-items-center"
    >
      <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
        <h1>Soy Sustrato</h1>
      </Link>
      <div>
        <CartWidget />
      </div>
    </div>
  );
}
