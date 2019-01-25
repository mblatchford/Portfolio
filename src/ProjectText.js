import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectMedia from "./ProjectMedia";
import BattleTanksLogo from "./BattleTanksLogo";
import ParityLogo from './ParityLogo';
import AdventchureTymeLogo from './AdventchureTymeLogo';
import UnscrambleLogo from './UnscrambleLogo';

const ProjectText = (props) => {
  const navLink = props.link;
  let header = "";
  switch (navLink) {
    case "Parity":
      header = < ParityLogo />
      break;

    case "AdventchureTyme":
      header = < AdventchureTymeLogo />
      break;

    case "ScrambleUn":
      header = < UnscrambleLogo />
      break;

    case "BattleTanks":
      header = <BattleTanksLogo />;
      break;

    default:
      header = "";
      break;
  }

  const toRender = () => {
    if (props.projData.playProjectLink) {
      return (
        <div className="project-text-container">
          <div className="project-header">{header}</div>
          <p className="project-text">{props.projData.projectText}</p>

          <div className="project-video">
            <ProjectMedia embedVid={props.link} />
          </div>

          <ul className="project-links">
            <li>
              <a href={props.projData.repositoryLink}>
                <FontAwesomeIcon icon="external-link-alt" />
                {props.projData.repositoryPlaceholder}
              </a>
            </li>

            <li>
              <a href={props.projData.playProjectLink}>
                <FontAwesomeIcon icon="external-link-alt" />
                {props.projData.playProjectPlaceholder}
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="project-text-container">
          <div className="project-header">{header}</div>
          <p className="project-text">{props.projData.projectText}</p>

          <div className="project-video">
            <ProjectMedia embedVid={props.link} />
          </div>

          <ul className="project-links">
            <li>
              <a href={props.projData.repositoryLink}>
                <FontAwesomeIcon icon="external-link-alt" />
                {props.projData.repositoryPlaceholder}
              </a>
            </li>
          </ul>
        </div>
      );
    }
  };

  return <div>{toRender()}</div>;
};

export default ProjectText;
