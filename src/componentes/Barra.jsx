/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./Barra.css";
import { AiOutlineSearch, AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoDiffAdded } from "react-icons/go";

import logoImage from "./logo.png";
import profilePhoto from "./nacho.jpg";

export default class Barra extends React.Component {
  render() {
    return (
      <div className="barContainer">
        <div className="mainContainer">
          <div className="logoContainer">
            <img src={logoImage} alt="logoInstagram" className="logo" />
          </div>
          <div className="searchBar">
            <AiOutlineSearch color="#8e8e8e" size="1.5em" className="searchIcon" />
            <input aria-label="Buscar entrada" autoCapitalize="none" className="clase1 clase2 clase3" placeholder="Buscar" type="text" />
          </div>
          <div className="iconsContainer">
            <MdHomeFilled className="icono" color="#000" />
            <RiMessengerLine className="icono" color="#000" />
            <GoDiffAdded className="icono" color="#000" />
            <AiOutlineCompass className="icono" color="#000" />
            <AiOutlineHeart className="icono" color="#000" />
            <div className="icono profilePhoto">
              <img src={profilePhoto} alt="logoInstagram" className="profileImg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
