import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ProjectText = (props) => {
    const navLink = props.desiredLink;
    let header = "";
    switch(navLink){
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
        if(navLink === "home"){
            return(
                <div className="about_text">
                    <p> 
                        {props.project[navLink]}
                    </p>
                    <p>
                        {props.project.home2}
                    </p>
                </div> 
            )
        }else{
        return (   
            <div className="project-text">
                <h1 className="project-header">{header}</h1>
                <p ></p>
                    {props.project[navLink].projectText}
                <ul className="project-links">
                    <li>
                        <a  href={props.project[navLink].repositoryLink}>
                            <FontAwesomeIcon icon ="external-link-alt"   />
                            {props.project[navLink].repositoryPlaceholder}
                        </a>
                    </li>

                    <li>
                        <a   href={props.project[navLink].playProjectLink}>
                            <FontAwesomeIcon icon ="external-link-alt"   />
                            {props.project[navLink].playProjectPlaceholder}
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