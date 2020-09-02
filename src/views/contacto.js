import React from "react";
import ReactDOM from "react-dom";

export class Contacto extends React.Component {
  render() {
    return (
      <>
        {/* <div className="Center">
          <img
            alt="..."
            src={require("../assets/imgs/profile.png")}
            className="ProfilePic"
          />
        </div> */}
        <div className="Fade Content">
          <div className="Porfolio">
            <img
              alt="..."
              src={require("../assets/imgs/coding.png")}
              className="Soon"
            />
            <h3>Coding...</h3>
          </div>
        </div>
      </>
    );
  }
}
