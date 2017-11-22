import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import NetkiSVG from '../assets/nk-logo.svg';
import LoginButton from '../assets/btn_login.svg';
import {Input, Row} from 'react-materialize';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      width: 1600,
      height: 960
    }
  }

  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  
  render() {
    let height = this.state.height;
    let width = this.state.width;
    let styles = {
      container: {
        backgroundColor: '#ffffff',
        height: height,
        width: 570,
        textAlign: 'center'
      },
      logo: {
        margin: height/9.6
      },
      form: {
        textAlign: 'center',
        marginTop: height/9.6,
        marginBottom: height/9.6,
        marginLeft: 50,
        marginRight: 50
      },
      input: {
        marginLeft: 60,
        marginRight: 60
      },
      button: {
        cursor: 'pointer'
      },
      footer: {
        marginTop: height/4.8,
        fontFamily: 'Open Sans',
        fontSize: 14,
        fontWeight: 'bold'
      },
      footerOne: {
        color:'#929292'
      },
      footerTwo: {
        color: '#11abd6',
        cursor: 'pointer'
      },
      quotes: {
        width: 450,
        marginTop: -400,
        marginLeft: width/1.8,
        textAlign: 'left',
        color: '#ffffff',
        fontFamily: 'Open Sans'
      },
      quotesOne: {
        fontSize: 32
      },
      quotesTwo: {
        fontSize: 41,
        fontWeight: 'bold'
      },
      quotesThree: {
        marginTop: 30,
        fontSize: 28
      }
    }
    return (
      <div className="text-center" style={styles.container}>
        <img src={NetkiSVG} style={styles.logo}/>
          <div style={styles.form}>
            <div style={styles.input}>
              <Row> 
                <Input type="email" label="USERNAME" s={12} />
                <Input type="password" label="PASSWORD" s={12} />
              </Row>
            </div>
            <img src={LoginButton} onClick={() => {console.log('clicked')}} style={styles.button}/>
          </div>
        <div style={styles.footer}>
          <span style={styles.footerOne}>Having Trouble Logging In?</span>
          <span style={styles.footerTwo}> We'll Help You! </span>
        </div>
        { this.state.width > 1060 && this.state.height > 220?
          <div style={styles.quotes} >
            <div style={styles.quotesOne}>Welcome to</div>
            <div style={styles.quotesTwo}>Compliance Dashboard</div>
            <div style={styles.quotesThree}>Knowing your customers have never been so fast</div>
          </div>
        : null }
      </div>
    )
  }
}

export default LandingPage