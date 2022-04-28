/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./Sugerencias.css";
import PropTypes from "prop-types";
import profilePhoto from "./nacho.jpg";

class Sugerencia extends React.Component {
  render() {
    return (
      <div className="profileSection sugerencias">
        <div className="imageContainer">
          <img src={this.props.image} alt="logoInstagram" className="profilePicture" />
        </div>
        <div className="usernameContainer">
          <span className="usernameS">{this.props.username}</span>
          <span className="nameS">{this.props.name}</span>
        </div>
        <div className="cambiarContainer">
          <span className="cambiarTexto">follow</span>
        </div>
      </div>
    );
  }
}
Sugerencia.propTypes = {
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const imgs = [];
const usernames = [];
const namesS = [];
const names = ["Pablo", "Melaniye", "Marre", "Karen", "Luis", "Peter", "Chris", "Brian", "Juan", "Angel", "Alejandra", "Andrew", "Sebas", "Mark", "Pedro", "andres", "Carlos", "Cito", "Raul", "Gerardo", "Gary", "Mayra"];
const lastNames = ["Escobar", "Sosa", "Casasola", "Valencia", "Sandoval", "Griffin", "Bumbsted", "Connor", "Wick", "Higueros", "Guzman", "Rivers", "Escobedo", "Asturias"];

const createAuthor = () => {
  const nombre = names[Math.floor(Math.random() * names.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return [`${nombre}_${lastName}`, `${nombre} ${lastName}`];
};

export default class Sugerencias extends React.Component {
  render() {
    for (let i = 20; i < 26; i += 1) {
      imgs.push(`https://picsum.photos/200/300?random=${i + 1}`);
      const data = createAuthor();
      usernames.push(data[0]);
      namesS.push(data[1]);
    }
    return (
      <div className="SugerenciasContainer">
        <div className="profileSection">
          <div className="imageContainer">
            <img src={profilePhoto} alt="logoInstagram" className="profilePicture" />
          </div>
          <div className="usernameContainer">
            <span className="usernameS">sanNachoLibre</span>
            <span className="nameS">Ignacio Martin</span>
          </div>
          <div className="cambiarContainer">
            <span className="cambiarTexto">cambiar</span>
          </div>
        </div>
        <div className="sugerenciasL">
          <div className="titulos">
            <span className="titulo1">Sugerencias para ti</span>
            <span className="vertodo">ver todo</span>
          </div>
          {imgs.map((link, index) => (
            <Sugerencia
              image={link}
              username={usernames[index]}
              name={namesS[index]}
            />
          ))}
        </div>
      </div>
    );
  }
}
