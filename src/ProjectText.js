import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ProjectText = (props) => {
    const projectName = props.desiredLink;
    // console.log(projectName)
    return (
        <div>
        <h1>{props.projectName}</h1>
        <p className="project-text"></p>
            {props.project[0].projectText}
        <ul className="project-links">
            <li>
                <a  href={props.repositoryLink}>
                    <FontAwesomeIcon icon ="external-link-alt"   />
                    {props.repositoryPlaceholder}
                </a>
            </li>

            <li>
                <a   href={props.playProjectLink}>
                    <FontAwesomeIcon icon ="external-link-alt"   />
                    {props.playProjectPlaceholder}
                </a>
            </li> 
        </ul>
           

    </div>
    );
};

export default ProjectText;