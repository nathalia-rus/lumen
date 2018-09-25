import React, { Component } from 'react';
import '../../HomePage/list/MyList.css';
import Header from '../../HomePage/header/Header'
import './EditList.css';

const add = require("../../../assets/add.png");
const longLine = require("../../../assets/longLine.png")

class EditList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id : '',
          text: '', 
          completed: false 
        };
    };

  componentDidMount() {
    console.log('MOUNTING')
    this.props.getId()
      .then(res => this.setState({ id: res }))
  }

  renderListToDo() {
    return (this.props.list.map(listItem => {
      if (listItem.completed === false ) {
      return (
        <div>  <p> 💡 
          <span onClick={() => { this.toggle(listItem.id) }}  >
          {listItem.text} 
          </span> 
        <span className='delete' 
            onClick={() => { this.deletefromList(listItem.id) }} >
         x 
         </span>  
         </p>  
         </div>
      )
    } 
    })
    )
  }; 

  renderListDone() {
    return (this.props.list.map(listItem => {
      if (listItem.completed === true) {
        
        return (<div> 
          <p> 🕊  
            <span id="listItemsDone" onClick={() => { this.toggle(listItem.id) }} >  
            {listItem.text}  </span>
             <span className='delete' id='delete' 
              onClick={() => { this.deletefromList(listItem.id)}}  > 
             x 
             </span> 
             </p>
              </div> )
      }
    })
    )
  }; 



  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  toggle = (id) => {
    console.log(id);
   return this.props.toggleListItem1(id)
  }

  getId = () => {
    const newState = this.state;
    return newState.id;
    // this.setState( { id: event.target.})
  }

  deletefromList = async (id) => {
   let idUser = await this.props.getId();
    return this.props.deleteListItem1(idUser, id);
  }

  render() {
    console.log('AFTERMOUNTING', this.getId(), this.state.id)
    return (
      <div>
        <Header/>
        <div className="content">  
          <div className="notesContainer">
          <h3 className="subTitle"> kind ideas</h3>
            {/* <img className="longLine" src={longLine} /> */}
        </div>
          <br />
        <div className = "form"> 
            <input placeholder=" " type="text" name="addItem" value={this.state.text} onChange={this.handleChange}  />
            <button type="submit" className="addItem" onClick={() => this.props.addListItem1(this.state.text, this.state.id)}  > <img alt = 'button' className = "addButton" src={add} /> </button>
          <p> add </p>
          </div>
        <br/>
        <br/>
        <br/>
        <div className="listItems">

        
            {this.renderListToDo()}
        </div>
{/*           <img className="midLine" src={longLine} /> */}
          <br />
          <br />
          <div className="listItems">
            {this.renderListDone()}

          </div>
        </div>
      </div>
    );
  }

}

export default EditList;

// alternative to getId 

    // fetch('http://localhost:3010/')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ id : data[0]._id })
    //   });

//  <div  onClick = { () => toggleTodo(listItem.id)}>  <p> 💡 {listItem.text} </p> </div>

  // <div onClick="console.log('CLICKED')">   <p> 💡 {this.props.list[0].text[0]} </p> </div>
  //           <p> 💡 {this.props.list[0].text[1]} </p>
  //           <p> 💡 {this.props.list[0].text[2]} </p>
  //           {this.props.list[0].text[3] ? (<p> 💡  {this.props.list[0].text[3]} </p> ) : ' ' }
  //           {this.props.list[0].text[4] ? (<p> 💡  {this.props.list[0].text[4]} </p>) : ' '}
  //   {this.props.list[0].text[5] ? (<p> 💡  {this.props.list[0].text[5]} </p>) : ' '}  

  //  {this.props.list[0].completed[0] === true ? (<p> 🕊  {this.props.list[0].text[0]} </p>) : ' '}
  //           {this.props.list[0].completed[1] === true ? (<p> 🕊  {this.props.list[0].text[1]} </p>) : ' '}
  //           {this.props.list[0].completed[2] === true ? (<p> 🕊  {this.props.list[0].text[2]} </p>) : ' '}
  //           {this.props.list[0].completed[3] === true ? (<p> 🕊  {this.props.list[0].text[3]} </p>) : ' '} 


