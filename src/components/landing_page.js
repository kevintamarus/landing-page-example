import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import NetkiSVG from '../assets/nk-logo.svg';
import LoginButton from '../assets/btn_login.svg';

class LandingPage extends Component {
  render() {
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
      </div>
    )
  }
}

export default LandingPage

const styles = {
  container: {
    backgroundColor: 'white',
    height: window.innerHeight,
    width: window.innerWidth/3,
    textAlign: 'center'
  },
  logo: {
    marginTop: 100
  },
  form: {
    textAlign: 'center',
    marginTop: 200,
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
  }
}