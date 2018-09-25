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
      amount: this.props.donations,
    }
  }

  
  // getTotal = () => {
  //   let items = this.props.donations;
  //   let toReduce = items.map((item) => {
  //     return item.amount
  //   });
  //   return toReduce.reduce((total, amount) => total + amount);
  // }

  componentDidMount() {
  // this.getTotal();
  //  this.props.getDonations1()
   // this.setState({ amount: data[0].donations.amount.reduce((total, amount) => total + amount)})
  }

  renderDonations = () => {
    let items = this.props.donations;
    // console.log('LETS SEE', items[0].text[0])
    return (items.map(item => {
      return (
        <p> 🌱  {item.institution} - ${item.amount} </p>
      )
    })
    )
  };



// renderDonations() {
//   let toMap = zip(Object.entries(this.props.donations)[0][1], Object.entries(this.props.donations)[1][1]);
//   return toMap.map( item => {
//     return (<p> 🌱 $<i> {item.join('   -   ') }  </i> </p >  )
//   })
// };

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
         {/*  <p id="totalDonations"> 🕊 $ {this.props.getTotal()} total </p> */}
        </div>
      </div>
    );
  }
}

export default MyDonations;

