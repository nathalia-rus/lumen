import React, { Component } from 'react';
import './MyScores.css'
const add = require("../../../assets/add.png");
const substract = require("../../../assets/substract.png");
const spark = require('../../../assets/glittery.png')

class MyScores extends Component {

    constructor(props) {
        super(props);
        this.state = {
          goodActions: 0,
          smiles: 0,
          amount: this.props.donations,
          id : ''
        };
    };

    componentDidMount() {
     // this.props.getTotal();
      fetch('http://localhost:3010/')
        .then(res => res.json())
        .then(data => {
          console.log('what is this:', this.props.scores.smiles)
          this.setState({
      // amount: data[0].donations.amount.reduce((total, amount) => total + amount),
            amount: data[0].donations.map(item => {return (item.amount)}),
            smiles: this.props.scores.smiles,
            goodActions: this.props.scores.goodActions
          })
        });
        this.props.getId()
          .then(res => this.setState({ id: res }))
      }

      getTotal = () => {
        let toReduce = this.state.amount;
        return toReduce.reduce( (total, amount) => total + amount );
      }

    render() {
      console.log( 'here', this.state.amount)
      
      let parsedAmount = parseInt(this.state.amount, 10);

        return (
          
            <div className = "ScoreCont">
            <h3 className= "title">KIND DEEDS</h3>
            <div className = "scorecontainer"> 
              <img alt='goodAction' className="add" src={add} onClick={(() => this.props.addPoint1('goodActions', this.state.id))} />
              <img alt='substract' className="substract" src={substract} onClick={(() => this.props.removePoint1('goodActions', this.state.id))} />
              <h1 className="score"> {this.props.scores && this.props.scores.goodActions} </h1>
              
              <p className="desc" > good actions 💡 </p>
            </div>
            <div className="scorecontainer">
              <img alt='smile' className="add" src={add} onClick={(() => this.props.addPoint1('smiles', this.state.id))} />
               <img alt='subs' className="substract" src={substract} onClick = {( ()=> this.props.removePoint1('smiles', this.state.id))} /> 
              <h1 className="score"> {this.props.scores && this.props.scores.smiles} </h1> 
              <p className="desc smilesText" > smiles <img alt='note' className='sparkScore' src={spark} /> </p>
            </div>
            <div className="scorecontainer donationsNum">
              <h1 className="score"> ${this.getTotal()} </h1> 
              <p className="desc donationsText " >  donations <span className = 'space'>  🌱 </span> </p>
            </div>
            </div>
        );
    }

}

export default MyScores;


// <img alt='donations' className="add " id="donationsAdd" src={add} onClick={(() => this.setState({ amount: parsedAmount += 1 }))} />
//  <img alt = 'subs' className="substract" src={substract} onClick={(() => this.setState({ amount: parsedAmount -= 1 }))} />