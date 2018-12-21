import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Contacts from './Contacts';
import Headshot from './Headshot';
import NavBar from './NavBar';
import ProjectMedia from './ProjectMedia';
import ProjectText from './ProjectText';

library.add(fab, faEnvelope, faFilePdf, faExternalLinkAlt )

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      projectName:"Home",
      project: [{
        parity:{
          projectHeader:'Parity', 
          projectText: "Parity was my first front-end group project. A clone of the classic memory game, we were required to utilize multiple API's to parse varying data into our project. Using both images and sounds, we randomly paired the results of our API calls to each pair of tiles. Since we used completly seperate sources of data, we kept with very broad search terms to help with continuity. We learned a lot over the weeklong project and after testing incessantly, have sworn off ever playing a memory game again...",
          repositoryLink: "https://github.com/mblatchford/Parity",
          repositoryPlaceholder: 'Parity Repository',
          playProjectLink: "http://www.paritygame.club/",
          playProjectPlaceholder: "Play Parity",
          },
        adventchureTyme:{
          projectHeader:'AdventchureTyme',
          projectText: "AdventchureTyme's focus was another group project focused heavily on the backend. Our new trio had previously worked outside of class with Twilio and wanted to integrate it into our project. We came up with the idea of using Twilio to send and receive mobile messages for facilitiating a scavenger hunt style game. Adding a significant twist, we incorporated machine learning through Google's Vision API whereby the answer a user submits is an image. Text is then extracted from the image and compared to our answer database to progress through the game. The level of complexity was much greater in this project to be sure. With only a week's time we were able to complete a single adventure with a low-key but functional front-end.",
          repositoryLink:"https://github.com/mblatchford/AdventchureTyme", 
          repositoryPlaceholder: "AdventchureTyme Respository",
          playProjectLink: "http://ec2-18-191-164-133.us-east-2.compute.amazonaws.com/",
          playProjectPlaceholder: "Play AdventchureTyme"
        },
      }]
    }  
  }

  _handleNavClick = (desiredLink) => {
    // console.log("nav click")
    this.setState({
      projectName: desiredLink 
    })
  }
  
  render() {

    return (
      <div className="App">
        <NavBar 
          navClick = {this._handleNavClick}
        />
        <Headshot />
        <Contacts />
        <ProjectText 
          project={this.state.project}
          desiredLink={this.state.projectName}
        />
        <ProjectMedia 
          embedVid = {this.state.projectName}
        />
      </div>
    );
  }
}

export default App;
