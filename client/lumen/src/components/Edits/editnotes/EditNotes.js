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

    static defaultProps = {
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }


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
            <img className= "handLeft" src={hand} />
            <p>It felt super rewarding. I felt better that day.  </p>
            <img className="HandRight"  src={hand} />
            <p>  We had both smiled at each other, and my day felt brighter.  </p>
            <img className="handLeft" src={hand} />
            <p>  We had both smiled at each other, and my day felt brighter.  </p>
            <img className="HandRight" src={hand} />
            <p>  We had both smiled at each other, and my day felt brighter.  </p>
          
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