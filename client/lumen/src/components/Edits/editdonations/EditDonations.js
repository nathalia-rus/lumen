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
      id: 0,
      amount: '',
      total: this.props.donations,
      institution: '',
    };
  };

  componentDidMount() {
    // this.props.getTotal();
    fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          total: data[0].donations.map(item => { return (item.amount) }),
        })
      });

    this.props.getId()
      .then(res => this.setState({ id: res }))
  }

  getTotal = () => {
    let toReduce = this.state.total;
   return toReduce.reduce((total, amount) => total + amount);
  }

renderDonations = () => {
  let toMap = this.props.donations;
  return toMap.map( item => {
    return (<p> 🌱 $ {item.amount} - <i> {item.institution}  </i>  <span className='delete' id='delete'
      onClick={() => { this.deleteDonation(item.id) }}  >
      x
             </span>  </p >)
  })
}
  
  deleteDonation = async (id) => {
    let userId = await this.props.getId();
    return this.props.deleteDonation1(userId, id);
  }

  handleChangeAmount = (event) => {
    this.setState({ amount: event.target.value })
  }

  handleChangeInstitution = (event) => {
    this.setState({ institution: event.target.value })
  }


  //  <ivalue={this.state.text} onChange={this.handleChange} />
  // <onClick={() => this.props.addListItem1(this.state.text, this.state.id)}  > <img alt='button' className="addButton" src={add} /> </button>
//onClick={() => this.props.addListItem1(this.state.text, this.state.id)}  >
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
            <div className = "donationInputs">
            <div id='amountInput'>  <input value={this.state.amount} placeholder="amount" type="text" name="addItem" onChange={this.handleChangeAmount}  /> $ </div>
            <div id='institutionInput'>  <input value={this.state.institution} placeholder="I donated for..." type="text" name="addItem" onChange={this.handleChangeInstitution}  /></div>
            <br />
            <button onClick={() => this.props.addDonation1( this.state.id, parseInt(this.state.amount, 10), this.state.institution) }type="submit" className="addDonation" > <img alt='button' className="addButton" src={add} /> </button>
              <p className="addDonationP"> add </p>
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
            <p id="totalDonations"> 🕊 $ {this.getTotal()} total </p>
          </div>
        </div>
      </div>
    );
  }

}

export default EditDonations;


// componentDidMount() {
//   fetch('http://localhost:3010/')
//     .then(res => res.json())
//     .then(data => {
//       this.setState({ amount: data[0].donations.amount.reduce((total, amount) => total + amount) })
//     })
// }




{/* <div className="drop">
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
  </select> */}