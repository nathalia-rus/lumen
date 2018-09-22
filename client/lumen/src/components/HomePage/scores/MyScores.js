import React, { Component } from 'react';
import './MyScores.css'
const add = require("../../../assets/add.png");
const substract = require("../../../assets/substract.png");

class MyScores extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };


    render() {
        return (
            <div className = "ScoreCont">
            <h3 className= "title">KIND DEEDS</h3>
            <div className = "scorecontainer"> 
            <img className="substract" src={substract} />
              <h1 className="score"> {this.props.scores.goodActions} </h1>
              <img className="add" src={add} onClick={() => this.props.addGoodActionPoint(this.props.getId())}  />
              <p className="desc" > good actions</p>
            </div>
            <div className="scorecontainer">
              <img className="substract" src={substract} />
              <h1 className="score"> {this.props.scores.smiles} </h1>
              <img className="add" src={add} />
              <p className="desc" > smiles</p>
            </div>
            <div className="scorecontainer">
              <img className="substract" src={substract} />
              <h1 className="score" id="donationsNum"> ${this.props.scores.donations} </h1>
              <img className="add " id="donationsAdd" src={add}/>
              <p className="desc">  donations </p>
            </div>
            </div>
        );
    }

}

export default MyScores;

// here in case of need

/*     componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    } */


    // after render:

/* componentDidMount() {
}

componentDidUpdate(prevProps, prevState) {
}

componentWillUnmount() {
}

componentDidCatch(error, info) {
} */