import React, { Component } from 'react';
import './MyDonations.css';
const zip = require('lodash.zip');
const add = require("../../../assets/add.png");
const whiteLine = require("../../../assets/whiteLine.png");
/* const hand =require("../assets/hand.svg"); */


class MyDonations extends Component {

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
          <img className="addTo" src={add} />
          <img className="whiteLine" id= "donationsLine" src={whiteLine} />
        </div>
        <div className="donationsList">
           {this.renderDonations()}
          <p> 🌱 $ 5 <i> WWF </i> </p>
          <p id = "totalDonations"> 🕊 $ 16 total </p> 
        </div>
      </div>
    );
  }

}

export default MyDonations;


  // renderAmount() {
  //   return (this.props.donations.amount.map( (given) => {
  //     return (
  //       <span>  ${given} </span>
  //     )
  //   }))
  // }; 

  // renderInstitution() {
  //   return (this.props.donations.institution.map((toWhat) => {
  //     return (
  //       <span>  {toWhat}  </span>
  //     )
  //   }))
  // };