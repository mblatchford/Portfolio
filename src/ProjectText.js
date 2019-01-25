import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ProjectText = (props) => {
    const navLink = props.link;
    let header = "";
    switch(navLink){
        case "parity":
            header = "Parity"
            break;

        case "adventchureTyme":
            header = "AdventchureTyme"
            break;

        case "scrambleUn":
            header = "ScrambleUn"
            break;
        
        case "battleTanks":
            header = "BattleTanks"
            break;

        default :
            header = ""
            break;
    }

    const toRender = () => {
        if(navLink === "home"){
            return(
              console.log("home link")
            )
        }else{
        return ( 
            <div className="project-text-container">  
            <div >
                <h1 className="project-header">{header}</h1>
                <p className="project-text">
                    {props.projData.projectText}
                </p>
                <ul className="project-links">
                    <li>
                        <a  href={props.projData.repositoryLink}>
                            <FontAwesomeIcon icon ="external-link-alt"   />
                            {props.projData.repositoryPlaceholder}
                        </a>
                    </li>

                    <li>
                        <a   href={props.projData.playProjectLink}>
                            <FontAwesomeIcon icon ="external-link-alt"   />
                            {props.projData.playProjectPlaceholder}
                        </a>
                    </li> 
                </ul>
            
            </div>
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