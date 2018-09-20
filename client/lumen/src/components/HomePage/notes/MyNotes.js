import React, { Component } from 'react';
import './MyNotes.css'
const add = require("../../../assets/add.png");
const whiteLine = require("../../../assets/whiteLine.png");
const spark = require('../../../assets/glittery.png')

class MyNotes extends Component {
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
        <div className="subContainer">
          <h3 className="subTitle" id = "subTitleNotes">your notes</h3>
          <img className="addTo" id= "MyNotesAdd" src={add} />
          <img className="whiteLine" src={whiteLine} />
        </div>
        <div className="ListHome">
          <p> <img className="spark" src={spark} />  share my umbrella on a rainy day </p>
          <p> <img className="spark" src={spark} />  anonymously send flowers to someone </p>
          <p> <img className="spark" src={spark} /> randomly buy an ice cream to a child </p>
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

export default MyNotes;