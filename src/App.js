import React, { Component } from 'react';
import {} from 'react-bootstrap';
import LandingPage from './components/landing_page';
import RightText from './components/right_text';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage className="pull-left"/>
        {/* <RightText className="pull-right"/> */}
      </div>
    );
  }
}

export default App;
