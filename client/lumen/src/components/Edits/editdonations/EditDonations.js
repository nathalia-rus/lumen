import React, { Component } from 'react';
import '../../HomePage/list/MyList.css';
import './EditDonations.css';
import Header from '../../HomePage/header/Header';
const zip = require('lodash.zip');
const longLine = require("../../../assets/longLine.png");
const add = require("../../../assets/add.png");


class EditDonations extends Component {
    constructor(props) {
        super(props);
        this.state = {
          amout: 0
        };
    };

  componentDidMount() {
    fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        this.setState({ amount: data[0].donations.amount.reduce((total, amount) => total + amount) })
      })
  }

  renderDonations() {
    let toMap = zip(Object.entries(this.props.donations)[0][1], Object.entries(this.props.donations)[1][1]);
    return toMap.map(item => {
      return (<p> 🌱 $<i> {item.join('   -   ')}  </i> </p >)
    })
  };
  

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="notesContainer">
            <h3 className="subTitle"> kind donations</h3>
            {/*             <img className="longLine" src={longLine} /> */}
          </div>
          <br />

          <div className="drop">
            <select name="amount">
              <option value="select"> - select the amount - </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <div id="formDonations" className = 'form'>
              <input placeholder="cause donated for" type="text" name="addItem" />
              <button type="submit" className="addItem" > <img alt='button' className="addButton" src={add} /> </button>
              <p className="addDonationP"> add </p>
            </div>

            </div>

          <img className="longLine" src={longLine} />
          <br />
          <br />
          <br />
          <div className="donationsList">
            {this.renderDonations()}
            <img className="longLine" src={longLine} />
            <br/>
            <br />
            <br />
            <p id="totalDonations"> 🕊 $ 16 total </p>
          </div>
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

export default EditDonations;