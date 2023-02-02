import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Stevens</Link>
      <Link to="/Snoqualmie">Snoqualmie</Link>
      <Link to="/Crystal">Crystal</Link>
      <Link to="/Baker">Baker</Link>
    </div>
  );
}

export default Navbar;
