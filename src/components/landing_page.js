import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import NetkiSVG from '../assets/nk-logo.svg';
import LoginButton from '../assets/btn_login.svg';

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
        margin: 100
      },
      form: {
        textAlign: 'center',
        margin: 100,
        marginLeft: 75,
        marginRight: 75
      },
      button: {
        cursor: 'pointer'
      },
      footer: {
        marginTop: 200,
        fontFamily: 'times-new-roman',
        fontSize: 14
      },
      footerOne: {
        color:'#929292'
      },
      footerTwo: {
        color: '#11abd6'
      },
      quotes: {
        width: 450,
        marginTop: -400,
        marginBottom: height/27,
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
    console.log(window.innerHeight, 'window height')
    console.log(window.innerWidth, 'window width')
    console.log(winWidth(1.6), 'function')
    return (
      <div className="text-center" style={styles.container}>
        <img src={NetkiSVG} style={styles.logo}/>
          <div style={styles.form}>
            <form> 
              <div className="form-group">
                <input ref="email" type="email" className="form-control" placeholder="Username" required="" />
              </div>
              <div className="form-group">
                <input ref="password" type="password" className="form-control" placeholder="Password" required="" />
              </div>
            </form>
            <img src={LoginButton} onClick={() => {console.log('clicked')}} style={styles.button}/>
          </div>
        <div style={styles.footer}>
          <span style={styles.footerOne}>Having Trouble Logging In?</span>
          <span style={styles.footerTwo}> We'll Help You! </span>
        </div>
        { this.state.width > 1060 ?
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



const winHeight = pixels => {
  return window.innerHeight/pixels;
}

let winWidth = pixels => {
  return window.innerWidth/pixels;
}