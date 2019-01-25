import React from 'react';
import Parity from './assets/parity.mp4';
import AdventchureTyme from './assets/adventure.mp4';
import Unscramble from './assets/unscramble.mp4';
import BattleTanks from './assets/BattleTanks.mp4';

const ProjectMedia = (props) => {
    console.log(props.embedVid);
    // let projectVideo = "";
    const toRender = () => {
        if(props.embedVid === "home"){
          return null;
        }else{ 
            switch(props.embedVid){
                case "parity":
                    console.log("switch parity")
                    return <div className="project_video"><video width='385' src= {Parity} type="video/mp4" autoPlay={true} loop={true}/></div>         
                case "adventchureTyme":
                    console.log("switch adventure")
                    return  <video  width='415' src= {AdventchureTyme} type="video/mp4" autoPlay={true} loop={true}/>          
                case "scrambleun":
                    console.log("switch scrambleun")
                    // projectVideo = Unscramble
                    return  <video  width='415' src= {Unscramble} type="video/mp4" autoPlay={true} loop={true}/>          
                case "battleTanks":
                    console.log("switch battleTanks")
                    // projectVideo = Unscramble
                    return  <video  width='415' src= {BattleTanks} type="video/mp4" autoPlay={true} loop={true}/>          

                default:
                    break;  
            }  
        }
}
    return (
        toRender()

    );
};

export default ProjectMedia;