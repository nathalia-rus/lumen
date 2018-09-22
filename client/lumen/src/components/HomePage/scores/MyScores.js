import React, { Component } from 'react';
import './MyScores.css'
const add = require("../../../assets/add.png");
const substract = require("../../../assets/substract.png");

class MyScores extends Component {

    constructor(props) {
        super(props);
        this.state = {
          goodActions: 0,
          smiles: 0,
          amount: 0,
          id : ''
        };
    };

    componentDidMount() {
      fetch('http://localhost:3010/')
        .then(res => res.json())
        .then(data => {
          console.log('what is this:', this.props.scores.smiles)
          this.setState({
            amount: data[0].donations.amount.reduce((total, amount) => total + amount),
            smiles: this.props.scores.smiles,
            goodActions: this.props.scores.goodActions
          })
        });
        this.props.getId()
          .then(res => this.setState({ id: res }))

      }
    

 // onClick={() => this.props.addGoodActionPoint(this.props.getId())

    render() {
      console.log(this.state.id);
      console.log(this.props.scores.smiles)
      console.log(parseInt(this.state.smiles, 2));
      let parsedAmount = parseInt(this.state.amount, 10);
      let parsedGoodActions = parseInt(this.state.goodActions, 10);
      let parsedSmiles = parseInt(this.state.smiles, 10);

        return (
          
            <div className = "ScoreCont">
            <h3 className= "title">KIND DEEDS</h3>
            <div className = "scorecontainer"> 
              <img alt='substract' className="substract" src={substract} onClick={(() => this.props.removePoint1('goodActions', this.state.id))} />
              <h1 className="score"> {this.props.scores && this.props.scores.goodActions} </h1>
              <img alt='goodAction' className="add" src={add} onClick={(() => this.props.addPoint1('goodActions', this.state.id))} />
              <p className="desc" > good actions</p>
            </div>
            <div className="scorecontainer">
              {/* <img alt='subs' className="substract" src={substract} onClick={(() => this.props.removePoint1('smiles', this.state.id))} /> */}
              {/* <h1 className="score"> {this.state.smiles} </h1> */}
              <h1 className="score"> {this.props.scores && this.props.scores.smiles} </h1> 
              {/* <img alt='smile' className="add" src={add} onClick={(() => this.addPoint_(this.props.scores.smiles))} /> */}
              <img alt='smile' className="add" src={add} onClick={(() => this.props.addPoint1('smiles', this.state.id))} />
              <p className="desc" > smiles</p>
            </div>
            <div className="scorecontainer">
              <img alt = 'subs' className="substract" src={substract} onClick={(() => this.setState({ amount: parsedAmount -= 1 }))} />
              <h1 className="score" id="donationsNum"> ${this.state.amount } </h1>
              <img alt= 'donations' className="add " id="donationsAdd" src={add} onClick={(() => this.setState({ amount: parsedAmount+=1 }))}/>
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