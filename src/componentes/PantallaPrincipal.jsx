/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Barra from "./Barra";
import Historias from "./Historias";
import Sugerencias from "./Sugerencias";
import "./PantallaPrincipal.css";

export default class PantallaPrincipal extends React.Component {
  render() {
    return (
      <div className="container">
        <Barra />
        <div className="mainContentContainer">
          <div className="principal">
            <Historias />
          </div>
          <div className="sugerencias">
            <Sugerencias />
          </div>
        </div>
      </div>
    );
  }
}
