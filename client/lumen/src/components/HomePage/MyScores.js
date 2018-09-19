import React, { Component } from 'react';
import '../../layout/MyScores.css'
const add = require("../../assets/add.png");
const substract = require("../../assets/substract.png");

class MyScores extends Component {
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
            <div className = "ScoreCont">
            <h3 className= "title">KIND DEEDS</h3>
            <div className = "scorecontainer"> 
            <img className="substract" src={substract} />
            <h1 className = "score"> 9 </h1>
            <img className="add" src={add} />
              <p className="desc" > good actions</p>
            </div>
            <div className="scorecontainer">
              <img className="substract" src={substract} />
              <h1 className="score"> 9 </h1>
              <img className="add" src={add} />
              <p className="desc" > smiles</p>
            </div>
            <div className="scorecontainer">
              <img className="substract" src={substract} />
              <h1 className="score" id= "donationsNum"> $9 </h1>
              <img className="add " id="donationsAdd" src={add}/>
              <p className="desc">  donations </p>
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

export default MyScores;