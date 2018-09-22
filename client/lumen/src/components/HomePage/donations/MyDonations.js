import React, { Component } from 'react';
import './MyDonations.css';
import { Link } from 'react-router-dom';
const zip = require('lodash.zip');
const add = require("../../../assets/add.png");
const whiteLine = require("../../../assets/whiteLine.png");

class MyDonations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        this.setState({ amount: data[0].donations.amount.reduce((total, amount) => total + amount)})
      })
  }
 
renderDonations() {
  let toMap = zip(Object.entries(this.props.donations)[0][1], Object.entries(this.props.donations)[1][1]);
  return toMap.map( item => {
    return (<p> 🌱 $<i> {item.join('   -   ') }  </i> </p >  )
  })
};

  render() {
    return (
      <div>
        <div className="subContainer">
          <h3 className="subTitle" id = "donationsText">your donations</h3>
          <Link to="/donations" >   <img alt='donations' className="addTo" src={add} /> </Link>
          <img alt = 'donations' className="whiteLine" id= "donationsLine" src={whiteLine} />
        </div>
        <div className="donationsList">
           {this.renderDonations()} 
          <p id="totalDonations"> 🕊 $ {this.state.amount} total </p>
        </div>
      </div>
    );
  }
}

export default MyDonations;

