import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserGraduate,
  faSave,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class Resumen extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

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
          <div className="DownloadSection">
            <a
              href={require("../assets/docs/cv.pdf")}
              download="Cv - Jordy Palencia"
              className="BtnDownload"
            >
              <button className="BtnDownload">
                <FontAwesomeIcon className="F18" icon={faSave} />
                <p className="BtnText">Download CV </p>{" "}
              </button>
            </a>
          </div>
          <div className="Row">
            {/* Card Experience */}
            <div className="Card">
              <div className="Bar"></div>
              <div className="CardHeader">
                <FontAwesomeIcon className="IconHeader" icon={faBriefcase} />
                <h1 className="NameHeader">Experiencia</h1>
              </div>
              <div className="CardBody">
                <ul>
                  <li>
                    <div className="Li">
                      <p className="F14">
                        <strong>
                          Desarrollador -{" "}
                          <a
                            href="https://www.facebook.com/KnoahSolutionsHonduras/"
                            target="_blank"
                            className="Link"
                          >
                            Knoah Solutions
                          </a>
                        </strong>
                      </p>
                      <p className="Date F12 SecondaryColor">
                        <i>September 2020 - </i>
                        <span className="Current">Actualidad</span>
                      </p>
                      <div className="SecLi">
                        <ul>
                          {/* <li>
                            <p className="F12 SecLiText">
                              Líder de proyectos para el desarrollo de
                              plataforma inteligentes en metodologias en cascada
                              con seguimiento y asignación de tareas de
                              proyectos en metodologias SCRUM
                            </p>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="Li">
                      <p className="F14">
                        <strong>
                          Lider de Proyectos -{" "}
                          <a
                            href="https://asjhonduras.com/webhn/quienes-somos/"
                            target="_blank"
                            className="Link"
                          >
                            Asosiacion para una Sociedad mas Justa (ASJ)
                          </a>
                        </strong>
                      </p>
                      <p className="Date F12 SecondaryColor">
                        <i>Enero 2018 - Diciembre 2020</i>
                      </p>
                      <div className="SecLi">
                        <ul>
                          <li>
                            <p className="F12 SecLiText">
                              Líder de proyectos para el desarrollo de
                              plataforma inteligentes en metodologias en cascada
                              con seguimiento y asignación de tareas de
                              proyectos en metodologias SCRUM
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="Li">
                      <p className="F14">
                        <strong>
                          Analista y Desarrollador Web -{" "}
                          <a
                            href="https://asjhonduras.com/webhn/quienes-somos/"
                            target="_blank"
                            className="Link"
                          >
                            Asosiacion para una Sociedad mas Justa (ASJ)
                          </a>
                        </strong>
                      </p>
                      <p className="Date F12 SecondaryColor">
                        <i>Enero 2016 - Diciembre 2018</i>
                      </p>
                      <div className="SecLi">
                        <ul>
                          <li>
                            <p className="F12 SecLiText">
                              Analista y programador de software para creación
                              e/o implementar nuevos sitios, herramientas o
                              plataformas web con uso de PHP en modelo MVC,
                              HTML5, CSS, JavaScript, Jquery, AJAX, MYSQL.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Card Education */}
            <div className="W80">
              <div className="Bar"></div>
              <div className="CardHeader">
                <FontAwesomeIcon className="IconHeader" icon={faUserGraduate} />
                <h1 className="NameHeader">Educacion</h1>
              </div>
              <div className="CardBody">
                <ul>
                  <li>
                    <div className="Li">
                      <p className="F16">
                        <strong>
                          Titulo de Ingeniería en ciencias de la computación -
                          Universidad Católica de Honduras.
                        </strong>
                      </p>
                      <p className="Date F12 SecondaryColor">
                        <i>Enero 2016</i>
                      </p>
                      <div className="SecLi">
                        <ul>
                          <li>
                            <p className="F12 SecLiText">
                              Diplomado en Ingles para la Comunicación
                              Internacional.
                            </p>
                          </li>
                          <li>
                            <p className="F12 SecLiText">
                              Diplomado en Gestión de la Calidad Total.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="Li">
                      <p className="F16">
                        <strong>
                          Titulo de Bachiller en ciencia y letras - Shadai
                          School
                        </strong>
                      </p>
                      <p className="Date F12 SecondaryColor">
                        <i>Enero 2011</i>
                      </p>
                      <div className="SecLi">
                        <ul>
                          <li>
                            <p className="F12 SecLiText">
                              Diplomado en Computación.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Card Experience */}
            <div className="Card">
              <div className="Bar"></div>
              <div className="CardHeader">
                <FontAwesomeIcon className="IconHeader" icon={faLightbulb} />
                <h1 className="NameHeader">Habilidades</h1>
              </div>
              <div className="CardBody">
                <div className="Skill">
                  <p className="SkillTitle">HTML</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill100"></div>
                    </div>
                    <p className="F12">100%</p>
                  </div>
                </div>
                <div className="Skill">
                  <p className="SkillTitle">CSS</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill80"></div>
                    </div>
                    <p className="F12">80%</p>
                  </div>
                </div>
                <div className="Skill">
                  <p className="SkillTitle">React</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill50"></div>
                    </div>
                    <p className="F12">50%</p>
                  </div>
                </div>
                <div className="Skill">
                  <p className="SkillTitle">JavaScript / Jquery / AJAX</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill40"></div>
                    </div>
                    <p className="F12">40%</p>
                  </div>
                </div>
                <div className="Skill">
                  <p className="SkillTitle">PHP</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill80"></div>
                    </div>
                    <p className="F12">80%</p>
                  </div>
                </div>
                <div className="Skill">
                  <p className="SkillTitle">MYSQL / SQL Server</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill80"></div>
                    </div>
                    <p className="F12">80%</p>
                  </div>
                </div>
                <div className="Skill">
                  <p className="SkillTitle">MongoDB</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill40"></div>
                    </div>
                    <p className="F12">40%</p>
                  </div>
                </div>
                <div className="Skill">
                  <p className="SkillTitle">VB.NET / C#</p>
                  <div className="BarContainer">
                    <div className="BarSkillContainer">
                      <div className="BarSkill60"></div>
                    </div>
                    <p className="F12">60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
