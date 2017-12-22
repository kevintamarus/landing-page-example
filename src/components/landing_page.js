import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import NetkiSVG from '../assets/nk-logo.svg';
import LoginButton from '../assets/btn_login.svg';
import {Input, Row} from 'react-materialize';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    console.log(e, 'event')
    const username = this.refs.email.value.trim()
    const password = this.refs.password.value.trim()
    e.preventDefault()
    if (!username) {
      alert('Please enter username')
      return
    }
    if (!password) {
      alert('Please enter password')
      return
    }
    const creds = { username: username, password: password }
    console.log(creds, 'creds')
  }
  
  render() {
    let height = this.state.height;
    let width = this.state.width;
    let styles = {
      container: {
        backgroundColor: '#ffffff'
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
        marginTop: height/9.6,
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
      }
    }
    return (
      <div className="text-center">
        <img src={NetkiSVG} style={{marginTop: 100, marginBottom: 100}}/>
          <div>
            <div>
            <form style={{marginBottom: 25, marginLeft: 60, marginRight: 60}}>
            <div>
              <input ref="email" type="email" className="form-control" placeholder="Username" required="" />
            </div>
            <div>
              <input ref="password" type="password" className="form-control" placeholder="Password" required="" />
            </div>
          </form>
            </div>
            <img src={LoginButton} type="submit" onClick={(e) => this.handleClick(e)}/>
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