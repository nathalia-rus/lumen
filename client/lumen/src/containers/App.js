import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
/* import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props'; */
import '../App.css';
import Header from '../components/HomePage/header/Header';
import Homepage from '../components/HomePage/homepage/Homepage' ;
import EditList from '../components/Edits/editlist/EditList'
import EditNotes from '../components/Edits/editnotes/EditNotes';
import EditDonations from '../components/Edits/editdonations/EditDonations';

import {  getScores, createListItem, getListItems, createNote, getNotes, createDonation, getDonations } from '../redux/actions';

import { connect } from "react-redux"; 

class App extends Component {

  getScores_ = () => {
    return fetch('http://localhost:3010/') 
      .then(res => res.json())
      .then(data => {
       return this.props.getScores(data[0].scores);
      })
  } 

  getId = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        console.log((data[0]._id));
        return data[0]._id;
      })
  } 

  getList_ = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        console.log(this.props.getListItems(data[0].list));
        return this.props.getListItems(data[0].list);
      })
  } 

  getNotes_ = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        console.log(this.props.getNotes(data[0].notes));
        return this.props.getNotes(data[0].notes);
      })
  }

//  return { data[0].donations[0].amount ; data[0].donations[0].institution}

  getDonations_ = () => {
    return fetch('http://localhost:3010/')
    .then(res => res.json())
    .then(data => {
     return this.props.getDonations(data[0].donations.amount, data[0].donations.institution)
  //  return data[0].donations.amount
    } 
  )
}

getAmount = () => {
  return fetch('http://localhost:3010/')
    .then(res => res.json())
    .then(data => {
    //  return this.props.getAmount(data[0].donations.amount);
      return data[0].donations.amount })
};

addGoodActionPoint = (id) => {
  return fetch('http://localhost:3010/addGoodActionPoint/' +id, {
    method: "PUT"
  }).then(() => this.getScores_());
}

componentDidMount() {
  this.getScores_();
  this.getList_();
  this.getNotes_();
  this.getDonations_();
 // this.getId();
 this.getAmount();
}

  render() {
    return (  
   <Router > 
    <div> 
      <Header />
      <Route exact path = "/" render = {  ( props ) => ( 
      <Homepage 
        getId = {this.getId}
        scores={this.props.scores}
        getAmount = {this.getAmount}
        addGoodActionPoint={this.addGoodActionPoint}
        list={this.props.list}
        notes = {this.props.notes}
        donations={this.props.donations}
      />) 
      } /> 
      <Route exact path="/list" render={() => (<EditList/>)} /> 
      <Route exact path="/notes" render={() => (<EditNotes />)} /> 
      <Route exact path="/donations" render={() => (<EditDonations />)} /> 
    </div>
   </Router>  
    );
  }
}

 const mapStateToProps = state => ({
  scores: state.scores,
  list: state.list,
  notes: state.notes,
   donations: state.donations,
 //  amount: state.amount
 }); 

const mapDispatchToProps = dispatch => ({

  // scores
  getScores: scores => dispatch(getScores(scores)),
  // to add : inc and dec

  // list
  getListItems: list => dispatch(getListItems(list)),
  createListItem: listItem => dispatch(createListItem(listItem)),

  // notes
  getNotes: notes => dispatch(getNotes(notes)),
  createNote: note => dispatch(createNote(note)),

  // donations
  createDonation: (amount, institution) => dispatch(createDonation(amount, institution)),
  getDonations: (amount, institution) => dispatch(getDonations(amount, institution)),
  // getAmount: (amount) => dispatch(getAmount(amount)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);




/*  getUserData = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        console.log(data[0]);
        this.props.getScores(data[0].scores);
        this.props.getListItems(data[0].list);
        this.props.getNotes(data[0].notes); // will be passed as arg (notes) in redux action
        this.props.getDonations(data[0].donations);
      })
  }    
 */
