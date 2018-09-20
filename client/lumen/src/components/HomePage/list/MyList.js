import React, { Component } from 'react';
import './MyList.css'
const add = require("../../../assets/add.png");
const whiteLine = require("../../../assets/whiteLine.png")

class MyList extends Component {
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
            <div className = "subContainer"> 
            <h3 className="subTitle">your list</h3>
            <img className="addTo" src={add} />
              <img className="whiteLine" src={whiteLine} />
            </div>
              <div className = "ListHome"> 
              <p> 💡 share my umbrella on a rainy day </p>
              <p> 💡 anonymously send flowers to someone </p>
              <p> 💡 randomly buy an ice cream to a child </p>
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

export default MyList;