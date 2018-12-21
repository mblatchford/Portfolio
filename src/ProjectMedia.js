import React from 'react';
import Parity from './assets/parity.mp4';
import AdventchureTyme from './assets/adventure.mp4';


const ProjectMedia = (props) => {
    console.log(props.embedVid);
    let projectVideo = "";
    switch(props.embedVid){
        case "parity":
            console.log("switch parity")
            projectVideo = Parity
            break;
        case "adventchureTyme":
            console.log("switch adventure")
            projectVideo = AdventchureTyme
            break;
        // case "unscramble":
        // return a path to a sub component that loads
        // all of the game live?

        default:
            projectVideo= "";
            break;   
    }

    return (
        
        <video  src= {projectVideo} type="video/mp4" autoPlay={true} loop={true}/>
        
    );
};

export default ProjectMedia;