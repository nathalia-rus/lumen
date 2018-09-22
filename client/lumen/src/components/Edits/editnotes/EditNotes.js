import React, { Component } from 'react';
import '../../HomePage/list/MyList.css';
import '../editlist/EditList.css'
const add = require("../../../assets/add.png");
const longLine = require("../../../assets/longLine.png")
const hand = require("../../../assets/hand.svg")


class EditNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };


  renderNotes() {
    return (this.props.notes.map(note => {
      return (
        <div> <img className= "handLeft" src={hand} /> <p> {note} </p> </div>
      )
    })
    )
  };


  render() {
    return (
      <div>
        <div className="content">
          <div className="notesContainer">
            <h3 className="subTitle"> kind memories</h3>
{/*             <img className="longLine" src={longLine} /> */}
          </div>
          <br />
          <div className="form">
            <input placeholder=" " type="text" name="addItem" />
            <button type="submit" className="addItem" > <img className="addButton" src={add} /> </button>
            <p> add </p>
          </div>
          <br />
          <br />
          <br />
          <div className="listNotes">
            {this.renderNotes()} 
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

export default EditNotes;


{/* <p> <span className="apo">"</span> share my umbrella on a rainy day  <span className="apo">"</span>  </p> */}