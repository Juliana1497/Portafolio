import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div >
      <div className="containerHeader">
        <div className="nav">
          <Link to="/">
            <p>Inicio</p>
          </Link>
          <a href="#knowledge">
            <p>Conocimiento</p>
          </a>
          <a href="#projects">
            <p>Proyectos</p>
          </a>
          <Link to="/curriculum">
            <p>Curriculum</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
