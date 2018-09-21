import React, { Component } from 'react';
import './MyNotes.css'
const add = require("../../../assets/add.png");
const whiteLine = require("../../../assets/whiteLine.png");
const spark = require('../../../assets/glittery.png')

class MyNotes extends Component {


  renderNotes() {
    return (this.props.notes.map(note => {
        return (
   <p> <img  alt = 'note' className="spark" src={spark} /> {note} </p>
  )
})
)};

   render() {
      return (
      <div>
        <div className="subContainer">
          <h3 className="subTitle" id = "subTitleNotes">your notes</h3>
          <img alt = 'add' className="addTo" id= "MyNotesAdd" src={add} />
          <img alt = 'line' className="whiteLine" src={whiteLine} />
        </div>
          <div className="ListHome">
            {this.renderNotes()}   
               </div>
        </div>
      )
    }
  }

export default MyNotes;