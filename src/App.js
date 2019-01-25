import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';
import Headshot from './Headshot';
import About from './About';
import Projects from './Projects';
import Links from './Links';
import ProjectText from './ProjectText';
import ProjectMedia from './ProjectMedia';
// import ProjectMedia from './ProjectMedia';
// import ProjectText from './ProjectText';

library.add(fab, faEnvelope, faFilePdf, faExternalLinkAlt )

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      project: 
        {      
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
         },

        battletanks:{
          projectHeader:'BattleTanks',
          projectText: "The Digital Crafts capstone assignment allotted the most time of any project clocking in at two-weeks of development. Throughout the course I found it constructive to start with a simple game or puzzle mechanic and build it out in code. BattleTanks is another such instance. Riffing off the classic Battleship, BattleTanks is part and parcel the same experience. Diving deeper into React, I worked with a partner to bring the game about. After working with a couple of trio's and flying solo on Unscramble - a duo was a new experience. It turned out we worked well in a pair-programming format and completed the majority of the project in this way. We went outside Digital Crafts curriculum to learn about WebSockets with which we incorporated our live chat functionality.  Additionally, our backend is simply a WebSocket server using a FIFO method of matching players into games. We feel despite some appearance issues, (not responsive or mobile ready, some visual artifacts during play, etc), we did what we set out to do with just the two weeks available. Had we more time, we could have given some additional polish and maybe an AI bot to play against instead of just other people. All in all it was a successful project and an enjoyable challenge.",
          repositoryLink:"https://github.com/mblatchford/BattleTanks", 
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
    console.log("props.project")
    console.log(this.state.project.parity)
    return (
      <Router>
        <div >
          <Route
            path="/"
            exact 
            render={props => {
              return (
                <div className='App'>
                < Headshot />
                < Contact />
                < Links />
              </div>
              );
            }}
          />
          <Route
            path="/About"
            render={props => {
              return (
                <div className='App'>
                < Headshot />
                < Contact />
                < About />
                
              </div>
              );
            }}
          />
          <Route
            path="/Projects"
            render={props => {
              return (
                <div className='App'>
                < Headshot />
                < Contact />
                < Projects />
                
              </div>
              );
            }}
          />
          <Route
            path="/Projects/Parity"
            // exact
            render={props => {
              return (
                <div className='App'>
                < Headshot />
                < Contact />
                < ProjectText 
                  link ='parity' 
                  projData ={this.state.project.parity}
                />
                {/* < ProjectMedia link ='parity'/>                   */}
              </div>
              );
            }}
          />
          <Route
            path="/Projects/AdventchureTyme"
            render={props => {
              return (
                <div className='App'>
                < Headshot />
                < Contact />
                < ProjectText link ='adventchureTyme'/>
                < ProjectMedia link ='adventchureTyme'/>                
              </div>
              );
            }}
          />
          <Route
            path="/Projects/BattleTanks"
            render={props => {
              return (
                <div className='App'>
                < Headshot />
                < Contact />
                < ProjectText link ='battleTanks'/>
                < ProjectMedia link ='battleTanks'/>                
              </div>
              );
            }}
          />
          <Route
            path="/Projects/ScrambleUn"
            render={props => {
              return (
                <div className='App'>
                < Headshot />
                < Contact />
                < ProjectText link ='scrambleUn'/>
                < ProjectMedia link ='scrambleUn'/>
                
              </div>
              );
            }}
          />
        </div>
        
      </Router>
    );
  }
}

export default App;
