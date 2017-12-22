import React, { Component } from 'react';
import {} from 'react-bootstrap';
import LandingPage from './components/landing_page';
import RightText from './components/right_text';

class App extends Component {
  render() {
    return (
      <div>
        {/* <LandingPage className="pull-left"/> */}
        <div className="col-sm-5" style={{height: window.innerHeight}}><LandingPage/></div>
        <div className="col-sm-7" style={{
          backgroundImage: 'linear-gradient(45deg, #00687B 0%, #00344B 100%)', 
          height: window.innerHeight, 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center'}}>
          <div style={{position: 'absolute'}}>
            <div>Welcome to the</div>
            <div>Compliance Dashboard</div>
            <div>Onboarding Your Customers</div>
            <div>Has Never Been So Easy</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
