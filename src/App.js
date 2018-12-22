import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import Contacts from './Contacts';
import Headshot from './Headshot';
import NavBar from './NavBar';
import ProjectMedia from './ProjectMedia';
import ProjectText from './ProjectText';

library.add(fab, faEnvelope, faFilePdf, faExternalLinkAlt )

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      navLink:"home",
      project: 
        {
        home:"Why hello there! I see you've stumbled onto my page out of the billions the world wide web has to offer. Having retired from the sport of track cycling as an Olympian, I took the skills I honed for more than a decade of competition into academics. Graduating with a B.S. in Computer Science was a great foundation, but wanted more.", 
        
        home2:"Entering into Digital Crafts' immersive full-stack development program has elevated my technical skills immensely and you can see some of the larger projects I've been a part of. Thanks for the interest and don't hesitate to get in-touch if I can be of assistance!",
        
        parity:{
          projectHeader:'Parity', 
          projectText: "Parity was my first front-end group project. A clone of the classic memory game, we were required to utilize multiple API's to parse varying data into our project. Using both images and sounds, we randomly paired the results of our API calls to each pair of tiles. Since we used completly seperate sources of data, we kept with very broad search terms to help with continuity. We learned a lot over the weeklong project and after testing incessantly, have sworn off ever playing a memory game again...",
          repositoryLink: "https://github.com/mblatchford/Parity",
          repositoryPlaceholder: ' Parity Repository',
          playProjectLink: "http://www.paritygame.club/",
          playProjectPlaceholder: " Play Parity",
          },

        adventchureTyme:{
          projectHeader:'AdventchureTyme',
          projectText: "AdventchureTyme's focus was another group project focused heavily on the backend. Our new trio had previously worked outside of class with Twilio and wanted to integrate it into our project. We came up with the idea of using Twilio to send and receive mobile messages for facilitiating a scavenger hunt style game. Adding a significant twist, we incorporated machine learning through Google's Vision API whereby the answer a user submits is an image. Text is then extracted from the image and compared to our answer database to progress through the game. The level of complexity was much greater in this project to be sure. With only a week's time we were able to complete a single adventure with a low-key but functional front-end.",
          repositoryLink:"https://github.com/mblatchford/AdventchureTyme", 
          repositoryPlaceholder: " AdventchureTyme Respository",
          playProjectLink: "http://ec2-18-191-164-133.us-east-2.compute.amazonaws.com/",
          playProjectPlaceholder: " Play AdventchureTyme"
         },
        unscramble:{
          projectHeader:'Unscramble',
          projectText: "This 3-day project was a dive into React.js. Built as a clone of a basic unscramble puzzle, this app gave me a better foundation into how React works and why it's powerful. A front-end project only, there are no database dependencies rather I polled Unsplash for a random image restricted to 800x600 dimensions. There were some interesting hurdles when it came to defining the math and css sprites required to correctly show each portion of the background on a given tile but I worked them out. A CSS alchemist I'm not, postitioning the elements is still difficult and as such is not a responsive site",
          repositoryLink:"https://github.com/mblatchford/Unscramble", 
          repositoryPlaceholder: " Unscramble Respository",
          playProjectLink: "./needtoaddlink",
          playProjectPlaceholder: " Play Unscramble"
         }
        }
      
    }  
  }

  _handleNavClick = (desiredLink) => {
    // console.log("nav click")
    this.setState({
      navLink: desiredLink 
    })
  }
  
  render() {

    return (
      <div className="App">
        <NavBar 
          navClick = {this._handleNavClick}
        />
        <Headshot />
        {/* <Contacts /> */}
        <ProjectText 
          project={this.state.project}
          desiredLink={this.state.navLink}
        />
        <ProjectMedia 
          embedVid = {this.state.navLink}
        />
      </div>
    );
  }
}

export default App;
