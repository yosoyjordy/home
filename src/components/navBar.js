import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="Header">
          <ul className="NavBar">
            <li>
              <Link className="ButtonLike" to="/home">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="ButtonLike" to="/resumen">
                Resumen
              </Link>
            </li>
            <li>
              <Link className="ButtonLike" to="/portafolio">
                Portafolio
              </Link>
            </li>
            <li>
              <Link className="ButtonLike" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
