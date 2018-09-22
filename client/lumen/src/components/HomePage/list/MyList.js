import React, { Component } from 'react';
import './MyList.css';
import { Link } from 'react-router-dom';
const add = require("../../../assets/add.png");
const whiteLine = require("../../../assets/whiteLine.png");


class MyList extends Component {


 renderList() {
    return (this.props.list.map(item => {
      return (
               <p> 💡 {item} </p>
      )
    })
  )};


   render() {
    return (
      <div>
        <div className="subContainer">
          <h3 className="subTitle">your list</h3>
          <Link to="/list" > <img alt='add' src={add} className="addTo" /> </Link>
          <img alt='line' className="whiteLine" src={whiteLine} />
        </div>
        <div className="ListHome">

          {this.renderList()}
{/*           <p> 💡 {this.props.list[0]} </p> 
          <p> 💡 anonymously send flowers to someone </p>
          <p> 💡 randomly buy an ice cream to a child </p> */}
        </div>

      </div>
    );
  }

}

export default MyList;