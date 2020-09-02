import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="Footer">
          <div className="Container">
            <div className="Derechos">&copy; Jordy Palencia - 2020</div>
            <div className="Socials">
              <a
                className="Icon"
                href="https://github.com/yosoyjordy"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="Icon"
                href="https://www.facebook.com/YoSoyJordyPalencia"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                className="Icon"
                href="mailto:yosoyjordy@hotmail.com"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
