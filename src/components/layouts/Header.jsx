import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Modal from "../peyes/Modal";

const Header = () => {
  const [stateModal, changeState] = useState(false);

  //change nav color when scrolling
  

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
            <p>Projectos</p>
          </a>
          <Link to="/curriculum">
            <p>Curriculum</p>
          </Link>
        </div>
        <div className="contact">
          <p className="contactP" onClick={() => changeState(!stateModal)}>
            -CONTÁCTAME-
          </p>
        </div>
        <Modal state={stateModal} changeState={changeState} />
      </div>
    </div>
  );
};

export default Header;
