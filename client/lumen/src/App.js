import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/HomePage/Header';
import Homepage from './components/HomePage/Homepage' 

class App extends Component {
  render() {
    return (  
   <Router > 
    <div> 
      <Header/>
    <Route exact path = "/"
     component = {Homepage}/> 
      </div>
   </Router>  
    );
  }
}

export default App;
