/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Barra from "./Barra";
import Historias from "./Historias";
import Sugerencias from "./Sugerencias";
import Post from "./Post";
import "./PantallaPrincipal.css";

const imgs = [];
const posts = [];
const usernames = [];
const names = ["Pablo", "Melaniye", "Marre", "Karen", "Luis", "Peter", "Chris", "Brian", "Juan", "Angel", "Alejandra", "Andrew", "Sebas", "Mark", "Pedro", "andres", "Carlos", "Cito", "Raul", "Gerardo", "Gary", "Mayra"];
const lastNames = ["Escobar", "Sosa", "Casasola", "Valencia", "Sandoval", "Griffin", "Bumbsted", "Connor", "Wick", "Higueros", "Guzman", "Rivers", "Escobedo", "Asturias"];

const createAuthor = () => {
  const nombre = names[Math.floor(Math.random() * names.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${nombre}_${lastName}`;
};
export default class PantallaPrincipal extends React.Component {
  render() {
    for (let i = 30; i < 50; i += 1) {
      imgs.push(`https://picsum.photos/200/300?random=${i + 1}`);
      posts.push(`https://picsum.photos/614/650?random=${i + 31}`);
      usernames.push(createAuthor());
    }
    return (
      <div className="container">
        <Barra />
        <div className="mainContentContainer">
          <div className="principal">
            <Historias />
            {imgs.map((link, index) => <Post key={index} image={link} username={usernames[index]} postimg={posts[index]} />)}
          </div>
          <div className="sugerencias">
            <Sugerencias />
          </div>
        </div>
      </div>
    );
  }
}
