import React from 'react';
import Parity from './assets/parity.mp4';
import AdventchureTyme from './assets/adventure.mp4';
import Unscramble from './assets/unscramble.mp4';

const ProjectMedia = (props) => {
    console.log(props.embedVid);
    let projectVideo = "";
    const toRender = () => {
        if(props.embedVid === "home"){
          return null;
        }else{ 
            switch(props.embedVid){
                case "parity":
                    console.log("switch parity")
                    return <video  width='400' src= {Parity} type="video/mp4" autoPlay={true} loop={true}/>          
                case "adventchureTyme":
                    console.log("switch adventure")
                    return  <video  width='400' src= {AdventchureTyme} type="video/mp4" autoPlay={true} loop={true}/>          
                case "unscramble":
                    console.log("switch unscramble")
                    projectVideo = Unscramble
                    return  <video  width='400' src= {Unscramble} type="video/mp4" autoPlay={true} loop={true}/>          

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