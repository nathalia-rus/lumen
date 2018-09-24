import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
/* import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props'; */
import '../App.css';
import Login from '../components/welcome/Login';
import Profile from '../components/Profile/Profile'
import Header from '../components/HomePage/header/Header';
import Homepage from '../components/HomePage/homepage/Homepage' ;
import EditList from '../components/Edits/editlist/EditList'
import EditNotes from '../components/Edits/editnotes/EditNotes';
import EditDonations from '../components/Edits/editdonations/EditDonations';

import { removePoint, addPoint, getScores, addListItem, getListItems, addNote, getNotes, getDonations } from '../redux/actions';

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

  getList1 = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        console.log('DATA', data[0].list)
        let toMap = data[0].list;
        console.log('DATA2', this.props.getListItems(toMap));
        return this.props.getListItems(toMap);
      })
  } 

  getNotes_ = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        console.log('IN NOTES', this.props.getNotes(data[0].notes));
        return this.props.getNotes(data[0].notes);
      })
  }

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
      return data[0].donations.amount })
};


  addPoint1 = (what, id) => {
    fetch(`http://localhost:3010/addPoint/${id}?target=${what}`, {
        method: "PUT"
      })
      .then(console.log)
      .then(() => this.props.addPoint(what))
  }

  removePoint1 = (what, id) => {
    console.log('here')
    fetch(`http://localhost:3010/removePoint/${id}?target=${what}`, {
      method: "PUT"
    })
      .then(console.log)
      .then(() => this.props.removePoint(what))
  }


  addListItem1 = (text, id) => {
    console.log('here')
    fetch(`http://localhost:3010/addListItem/${id}?target=${text}`, {
      method: "PUT"
    })
      .then(console.log)
      .then(() => this.props.addListItem(text))
  }

  addNote1 = (text, id) => {
    console.log('here')
    fetch(`http://localhost:3010/addNote/${id}?target=${text}`, {
      method: "PUT"
    })
      .then(console.log)
      .then(() => this.props.addNote(text))
  }




componentDidMount() {
  this.getScores_();
  this.getList1();
  this.getNotes_();
  this.getDonations_();
  this.getId();
  this.getAmount();
  console.log('FIRST FETCH', this.props.list);
}

  render() {
    return (  
   <Router > 
    <div> 
          <Route exact path="/login" render={() =>
            (<Login />)} /> 
          <Route exact path="/profile" render={() =>
            (<Profile />)} /> 
      <Route exact path = "/" render = {  ( props ) => ( 
      <Homepage 
        textList={this.props.textList}
        removePoint1 = {this.removePoint1}
        addPoint1 = {this.addPoint1}
        getId = {this.getId}
        scores={this.props.scores}
        getAmount = {this.getAmount}
        addGoodActionPoint={this.addGoodActionPoint}
        list={this.props.list}
        notes = {this.props.notes}
        donations={this.props.donations}
      />) 
      } /> 
      <Route exact path="/list" render={(props) => 
      ( <EditList
      list = {this.props.list}
      addListItem1 = {this.addListItem1}
      getId={this.getId}
      />
      )} /> 
      <Route exact path="/notes" render={ ( props ) => 
        ( <EditNotes 
          notes = {this.props.notes}
          getId={this.getId}
          addNote1={this.addNote1}
        />)} /> 
      <Route exact path="/donations" render={ ( props ) => 
        ( <EditDonations
        donations = {this.props.donations}
        getId={this.getId}
         />)} /> 
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
  addPoint: (what) => dispatch(addPoint(what)),
  removePoint: (what) => dispatch(removePoint(what)),

  // list
  getListItems: (id, text, completed) => dispatch(getListItems(id, text, completed)),
  addListItem: (text) => dispatch(addListItem(text)),

  // notes
  getNotes: notes => dispatch(getNotes(notes)),
  addNote: note => dispatch(addNote(note)),

  // donations
  getDonations: (amount, institution) => dispatch(getDonations(amount, institution)),
  // getAmount: (amount) => dispatch(getAmount(amount)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
