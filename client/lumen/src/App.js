import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/HomePage/header/Header';
import Homepage from './components/HomePage/homepage/Homepage' ;
import EditList from './components/Edits/editlist/EditList'
import EditNotes from './components/Edits/editnotes/EditNotes';
import EditDonations from './components/Edits/editdonations/EditDonations';

class App extends Component {
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
