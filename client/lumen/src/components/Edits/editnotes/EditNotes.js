import React, { Component } from 'react';
import '../../HomePage/list/MyList.css';
import '../editlist/EditList.css';
import Header from '../../HomePage/header/Header'
const add = require("../../../assets/add.png");
const longLine = require("../../../assets/longLine.png")
const hand = require("../../../assets/hand.svg")


class EditNotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      text: ''
    };
  };

  componentDidMount() {
    this.props.getId()
      .then(res => this.setState({ id: res }))
  }

  renderNotes() {
    console.log('ERROR THERE',  this.props.notes)
    return (this.props.notes.map(note => {
      return (
       <div> <img className= "handLeft" src={hand} /> <p> {note.text} <span className = 'delete' onClick = {() => this.deleteNote(note.id)} > x </span></p> </div>
      )
    })
    )
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  deleteNote = async (id) => {
    let idUser = await this.props.getId();
    return this.props.deleteNote1(idUser, id)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="notesContainer">
            <h3 className="subTitle"> kind memories</h3>
{/*             <img className="longLine" src={longLine} /> */}
          </div>
          <br />
          <div className="form">
            <input placeholder=" " type="text" name="addItem" value={this.state.text} onChange={this.handleChange} />
            <button type="submit" className="addItem" > <img className="addButton" src={add} onClick={() => this.props.addNote1(this.state.text, this.state.id)} /> </button>
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

}

export default EditNotes;


{/* <p> <span className="apo">"</span> share my umbrella on a rainy day  <span className="apo">"</span>  </p> */}