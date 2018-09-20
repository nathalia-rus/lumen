import React, { Component } from 'react';
import './Header.css'
const myProfileLogo = require('../../../assets/myProfile.png')
const inspirationLogo = require('../../../assets/inspiration.png')
/* const eye = require('../assets/eye.png') */
const WhiteCircle = require('../../../assets/WhiteCircle.png')
const GreyCircle = require('../../../assets/GreyCircle.png')

class Header extends Component {

    render() {
        return (
          <div> 
            <div className="logoContainer">
                <img className="myProfileLogo" src={myProfileLogo} /> 
             <h1 className="appTitle center">LUMEN</h1>
            <img className="inspirationLogo" src={inspirationLogo} />
            </div>
            <div className= "circleContainer"> 
            <img className="GreyCircle" src={GreyCircle}/>
            <img className="WhiteCircle" src={WhiteCircle} />
            <img className="GreyCircle" src={GreyCircle} />
            </div>
            </div>
        );
    }
}

export default Header;