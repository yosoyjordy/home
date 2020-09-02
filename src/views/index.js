import React from "react";
import ReactDOM from "react-dom";

export class Index extends React.Component {
  render() {
    return (
      <>
        <div className="Fade Content">
          <div className="Centered">
            <img
              alt="..."
              src={require("../assets/imgs/profile.jpg")}
              className="ProfilePic"
            />
          </div>
          <p className="Centered Fm">
            <b>Jordy Palencia</b>
          </p>
          <p className="Centered Subtitle Fs">Analista Desarrolador</p>
          <div className="Icons">
            <img
              alt="..."
              src={require("../assets/imgs/js.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/css.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/html.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/bootstrap.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/jquery.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/ajax.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/nodejs.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/php.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/wpress.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/mysql.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/mongodb.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/csharp.png")}
              className="Opacity sm"
            />
            <img
              alt="..."
              src={require("../assets/imgs/vbnet.png")}
              className="Opacity sm"
            />
          </div>
        </div>
      </>
    );
  }
}
