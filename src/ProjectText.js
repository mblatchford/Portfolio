import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ProjectText = (props) => {
    const projectName = props.desiredLink;
    let header = "";
    switch(projectName){
        case "parity":
            header = "Parity"
            break;

        case "adventchureTyme":
            header = "AdventchureTyme"
            break;

        case "unscramble":
            header = "Unscramble"
            break;

        default :
            header = ""
            break;
    }

    const toRender = () => {
        if(projectName === "home"){
            return(
                <div className="about_txt">
                    <p> 
                        {props.project[projectName].paragraph1}
                    </p>
                    <p>
                        {props.project.home.paragraph2}
                    </p>
                </div> 
            )
        }else{
        return (   
            <div>
                <h1>{header}</h1>
                <p className="project-text"></p>
                    {props.project[projectName].projectText}
                <ul className="project-links">
                    <li>
                        <a  href={props.project[projectName].repositoryLink}>
                            <FontAwesomeIcon icon ="external-link-alt"   />
                            {props.project[projectName].repositoryPlaceholder}
                        </a>
                    </li>

                    <li>
                        <a   href={props.project[projectName].playProjectLink}>
                            <FontAwesomeIcon icon ="external-link-alt"   />
                            {props.project[projectName].playProjectPlaceholder}
                        </a>
                    </li> 
                </ul>
            
            </div>
        )
        }
        
    }

    return (
        <div>
        {toRender()}
        </div>
    );
};

export default ProjectText;