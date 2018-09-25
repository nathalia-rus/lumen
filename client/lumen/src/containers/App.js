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

import { addDonation, deleteDonation, toggleListItem, deleteNote, deleteListItem, removePoint, addPoint, getScores, addListItem, getListItems, addNote, getNotes, getDonations } from '../redux/actions';

import { connect } from "react-redux"; 

class App extends Component {

  getScores_ = () => {
    return fetch('http://localhost:3010/') 
      .then(res => res.json())
      .then(data => {
        if (!data[0]) {
          console.log('not there yet')
        }
        else 
       return this.props.getScores(data[0].scores);
      })
  } 

  getId = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        if ( !data[0]) {
          console.log('not there yet')
        }
        else return data[0]._id;
      })
  }

  getList1 = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        if (!data[0]) {
          console.log('not there yet')
        }
        else {
        let toMap = data[0].list;
        return this.props.getListItems(toMap);}
      })
  } 

  getNotes_ = () => {
    return fetch('http://localhost:3010/')
      .then(res => res.json())
      .then(data => {
        if (!data[0]) {
          console.log('not there yet')
        }
        else {
        console.log('IN NOTES', this.props.getNotes(data[0].notes));
        return this.props.getNotes(data[0].notes);}
      })
  }

  getDonations1 = () => {
    return fetch('http://localhost:3010/')
    .then(res => res.json())
    .then(data => {
     // console.log('HEREEEE', data[0].donations);
      if (!data[0]) {
        console.log('not there yet')
      }
      else  return this.props.getDonations(data[0].donations)

    } 
  )
}

getAmount = () => {
  return fetch('http://localhost:3010/')
    .then(res => res.json())
    .then(data => {
      if (!data[0]) {
        console.log('not there yet')
      }
      else 
      return data[0].donations.amount })
};


  addPoint1 = async (what, id) => {
    this.props.addPoint(what);
    await fetch(`http://localhost:3010/addPoint/${id}?target=${what}`, {
        method: "PUT"
      })
  
  }

  removePoint1 = async (what, id) => {
    this.props.removePoint(what)
    await fetch(`http://localhost:3010/removePoint/${id}?target=${what}`, {
      method: "PUT"
    })
  }


  addListItem1 = (text, id) => {
    console.log('here')
    fetch(`http://localhost:3010/addListItem/${id}?target=${text}`, {
      method: "PUT"
    })
      .then(() => this.props.addListItem(text))
  }

  addNote1 = (text, id) => {
    fetch(`http://localhost:3010/addNote/${id}?target=${text}`, {
      method: "PUT"
    })
      .then(() => this.props.addNote(text))
  }

  addDonation1 = (iduser, amount, institution) => {
    fetch(`http://localhost:3010/addDonation/${iduser}?myparam1=${amount}&myparam2=${institution}`, {
      method: "PUT"
    }).then(this.props.addDonation(amount, institution))
  }

  deleteListItem1 = (idUser, idList) => {
    console.log('test',idUser, idList);
    fetch(`http://localhost:3010/deleteListItem/${idUser}/${idList}`, {
      method: "DELETE"
    })
      .then(() => this.props.deleteListItem(idList))
    }

  deleteNote1 = (idUser, idNote) => {
    fetch(`http://localhost:3010/deleteNote/${idUser}/${idNote}`, {
      method: "DELETE"
    })
    return this.props.deleteNote(idNote);
  }

  deleteDonation1 = (idUser, idDonation) => {
    fetch(`http://localhost:3010/deleteDonation/${idUser}/${idDonation}`, {
      method: "DELETE"
    })
    return this.props.deleteDonation(idDonation);
  }

  toggleListItem1 = (id, idUser) => {
    this.props.toggleListItem(id);
    fetch(`http://localhost:3010/toggleListItem/${idUser}/${id}`, {
      method: "PUT"
    })
  }

componentDidMount() {
  this.getScores_();
  this.getList1();
  this.getNotes_();
  this.getDonations1();
  this.getId();
  this.getAmount();
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
        getDonations1={this.getDonations1}
        getTotal ={this.getTotal}
      />) 
      } /> 
      <Route exact path="/list" render={(props) => 
      ( <EditList
      list = {this.props.list}
      addListItem1 = {this.addListItem1}
      getId={this.getId}
      deleteListItem1={this.deleteListItem1}
      toggleListItem1={this.toggleListItem1}
      />
      )} /> 
      <Route exact path="/notes" render={ ( props ) => 
        ( <EditNotes 
          notes = {this.props.notes}
          getId={this.getId}
          addNote1={this.addNote1}
          deleteNote1 = {this.deleteNote1}
        />)} /> 
      <Route exact path="/donations" render={ ( props ) => 
        ( <EditDonations
        donations={this.props.donations}
        getId={this.getId}
        getDonations1 = {this.getDonations1}
        getTotal={this.getTotal}
        deleteDonation1={this.deleteDonation1}
        addDonation1={this.addDonation1}
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
  deleteListItem: (id) => dispatch(deleteListItem(id)),
  toggleListItem: (id) => dispatch(toggleListItem(id)),
  // notes
  getNotes: notes => dispatch(getNotes(notes)),
  addNote: note => dispatch(addNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),

  // donations
  getDonations: (donations) => dispatch(getDonations(donations)),
  deleteDonation: (id) => dispatch(deleteDonation(id)),
  addDonation: (amount, institution) => dispatch(addDonation(amount, institution)),
  // getAmount: (amount) => dispatch(getAmount(amount)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);


  // getTotal = () => {
  //   console.log(this.props.donations)
  //   return this.props.donations.map((item) => {
  //     return item.amount
  //   }).reduce((total, amount) => total + amount);
  // }
