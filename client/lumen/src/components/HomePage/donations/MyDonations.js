import React, { Component } from 'react';
import './MyDonations.css'
const add = require("../../../assets/add.png");
const whiteLine = require("../../../assets/whiteLine.png");
/* const hand =require("../assets/hand.svg"); */

class MyDonations extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static defaultProps = {
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

  render() {
    return (
      <div>
        <div className="subContainer">
          <h3 className="subTitle" id = "donationsText">your donations</h3>
          <img className="addTo" src={add} />
          <img className="whiteLine" id= "donationsLine" src={whiteLine} />
        </div>
        <div className="donationsList">
          <p> 🌱 $ 9 <i> Amnesty International</i> </p>
          <p> 🌱 $ 2 <i> Medecins Sans Frontieres </i> </p>
          <p> 🌱 $ 5 <i> WWF </i> </p>
          <p id = "totalDonations"> 🕊 $ 16 total </p>
        </div>
      </div>
    );
  }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    componentDidCatch(error, info) {
    }
}

export default MyDonations;