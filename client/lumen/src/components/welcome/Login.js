import React, { Component } from 'react';
import './Login.css';
const eye = require('../../assets/eye.png');
const profileLogo = require('../../assets/myProfile.png');
const password = require('../../assets/password.png');
const longLine = require('../../assets/longLine.png')

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static defaultProps = {
    }


    render() {
        return (
            <div>
            <img alt='logingLogo' className="logingLogo" src={eye} />
            <h1 className="logingTitle">LUMEN</h1>
            <div>
              <div className='or'> 
              <img alt='logingLogo' className="longLineLog" src={longLine} /> <p>welcome </p> <img alt='logingLogo' className="longLineLog" src={longLine} />
                </div>
              <img alt='logingLogo' className="passwordLogo" src={password} />
              <img alt='logingLogo' className="profileLogo" src={profileLogo} />
              <input className = 'loginInput' placeholder="" type="text" name="addItem" />
              <input className='loginInput' placeholder="" type="text" name="addItem" />
              <button type="submit" className="logingButton" > <p className = 'loginAlt'> login </p> </button>
            </div>
            <div className = 'or'> 
              <img alt='logingLogo' className="longLineLog" src={longLine} /> <p>or </p> <img alt='logingLogo' className="longLineLog" src={longLine} />
            </div>
            <button type="submit" className="logingButton" id = "facebook" > <p className='loginAlt'> log me in with Facebook </p> </button>
            <button type="submit" className="logingButton" id="twitter"  > <p className='loginAlt'> log me in with Twitter </p> </button>
            <button type="submit" className="logingButton" id="signup"  > <p className='loginAlt'> Create an account </p> </button>
            </div>
        );
    }

}

export default Login;