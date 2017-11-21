import React, { Component } from 'react';
import {} from 'react-bootstrap';

class RightText extends Component {
  render() {
    return (
      <div className="pull-right" >
        <div>Welcome to</div>
        <div>Compliance Dashboard</div>
        <div>Knowing your customers have never been so fast</div>
      </div>
    );
  }
}

export default RightText;

const styles = {
  container: {
    height: window.innerHeight
  }
}