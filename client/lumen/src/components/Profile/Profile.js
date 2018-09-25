import React, { Component } from 'react';
import Header from '../HomePage/header/Header'
import ('../../App.css')
const profilepic = require('../../assets/profile.png')

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };


    render() {
        return (
            <div >
              <Header/>
              <img id = 'profilepic' src = {profilepic} />
            </div>
        );
    }
}

export default Profile;