import React, { Component } from 'react';
import '../../HomePage/list/MyList.css';
import './EditList.css'
const add = require("../../../assets/add.png");
const longLine = require("../../../assets/longLine.png")

class EditList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static defaultProps = {
    }


  render() {
    return (
      <div>
        <div className="content">  
          <div className="notesContainer">
          <h3 className="subTitle"> kind ideas</h3>
            {/* <img className="longLine" src={longLine} /> */}
        </div>
          <br />
        <div className = "form"> 
          <input placeholder=" " type="text" name="addItem"/>
          <button type="submit" className="addItem" > <img alt = 'button' className = "addButton" src={add} /> </button>
          <p> add </p>
          </div>
        <br/>
        <br/>
        <br/>
        <div className="listItems">
          <p> 💡 share my umbrella on a rainy day </p>
          <p> 💡 anonymously send flowers to someone </p>
          <p> 💡 randomly buy an ice cream to a child </p>
            <p> 💡 share my umbrella on a rainy day </p>
            <p> 💡 anonymously send flowers to someone </p>
            <p> 💡 randomly buy an ice cream to a child </p>
        </div>
{/*           <img className="midLine" src={longLine} /> */}
          <br />
          <br />
          <div className="listItems" id= "listItemsDone">
            <p> 🕊 share my umbrella on a rainy day </p>
            <p> 🕊 anonymously send flowers to someone </p>
            <p> 🕊 randomly buy an ice cream to a child </p>
            <p> 🕊 share my umbrella on a rainy day </p>
            <p> 🕊 anonymously send flowers to someone </p>
            <p> 🕊 randomly buy an ice cream to a child </p>
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

export default EditList;