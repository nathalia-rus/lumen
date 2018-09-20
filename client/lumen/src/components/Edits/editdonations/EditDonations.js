import React, { Component } from 'react';
import '../../HomePage/list/MyList.css';
import './EditDonations.css'
const longLine = require("../../../assets/longLine.png")


class EditDonations extends Component {
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
        <div className="content">
          <div className="notesContainer">
            <h3 className="subTitle"> kind donations</h3>
            {/*             <img className="longLine" src={longLine} /> */}
          </div>
          <br />

          <div className="drop">
            <select name="amount">
              <option value="select"> select the amount</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <p className = "addDonationP"> add </p>
            </div>
          <img className="longLine" src={longLine} />
          <br />
          <br />
          <br />
          <div className="donationsList">
            <p> 🌱 $ 9 <i> Amnesty International</i> </p>
            <p> 🌱 $ 2 <i> Medecins Sans Frontieres </i> </p>
            <p> 🌱 $ 5 <i> WWF </i> </p>
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