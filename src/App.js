import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import Contacts from './Contacts'

library.add(fab, faEnvelope, faFile )

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
