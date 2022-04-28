/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./Historias.css";
import PropTypes from "prop-types";

class Historia extends React.Component {
  render() {
    return (
      <div className="historiaContainer">
        <div className="imageContainerBorder">
          <div className="image">
            <img src={this.props.image} alt="logoInstagram" className="profileImg" />
          </div>
        </div>
        <div className="usernameContainer">
          <span className="username">
            {this.props.username}
          </span>
        </div>
      </div>
    );
  }
}
Historia.propTypes = {
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const imgs = [];
const usernames = [];
const names = ["Pablo", "Melaniye", "Marre", "Karen", "Luis", "Peter", "Chris", "Brian", "Juan", "Angel", "Alejandra", "Andrew", "Sebas", "Mark", "Pedro", "andres", "Carlos", "Cito", "Raul", "Gerardo", "Gary", "Mayra"];
const lastNames = ["Escobar", "Sosa", "Casasola", "Valencia", "Sandoval", "Griffin", "Bumbsted", "Connor", "Wick", "Higueros", "Guzman", "Rivers", "Escobedo", "Asturias"];

const createAuthor = () => {
  const nombre = names[Math.floor(Math.random() * names.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${nombre}_${lastName}`;
};

export default class Historias extends React.Component {
  render() {
    for (let i = 0; i < 20; i += 1) {
      imgs.push(`https://picsum.photos/200/300?random=${i + 1}`);
      usernames.push(createAuthor());
    }

    return (
      <div className="historiasContainer">
        {imgs.map((link, index) => <Historia image={link} username={usernames[index]} />)}
      </div>
    );
  }
}
