/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Barra from "./Barra";
import "./PantallaPrincipal.css";

export default class PantallaPrincipal extends React.Component {
  render() {
    return (
      <div className="container">
        <Barra />
      </div>
    );
  }
}
