import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
/* import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props'; */
import '../App.css';
import Header from '../components/HomePage/header/Header';
import Homepage from '../components/HomePage/homepage/Homepage' ;
import EditList from '../components/Edits/editlist/EditList'
import EditNotes from '../components/Edits/editnotes/EditNotes';
import EditDonations from '../components/Edits/editdonations/EditDonations';

/* import { createListItem, getListItems, createNote, getNotes, createDonation, getDonations } from '../redux/actions'

import { connect } from "react-redux"; */

class App extends Component {


getUserData =() => {
  return fetch('http://localhost:3010/userdata')
  .then(res => res.json())
    .then(data => {
      this.props.getListItems(data.list);

    }
      
    };
      

componentDidMount() {
  this.getUserData();
}

  render() {
    return (  
   <Router > 
    <div> 
      <Header />
      <Route exact path = "/" component = {Homepage}/> 
      <Route exact path="/list" component={EditList} /> 
      <Route exact path="/notes" component={EditNotes} /> 
      <Route exact path="/donations" component={EditDonations} /> 
    </div>
   </Router>  
    );
  }
}

export default App;