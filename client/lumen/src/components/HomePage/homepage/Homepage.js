import React, { Component } from 'react';
import MyList from '../list/MyList';
import MyNotes from '../notes/MyNotes';
import MyScores from '../scores/MyScores';
import MyDonations from '../donations/MyDonations';
import Header from '../header/Header'


class Homepage extends Component {

// pass props to components

  componentDidMount() {
this.props.list;
    console.log('HOMEPAGE', this.props.list);
  }


    render() {
 
        return (
          <div> 
          <Header />
          <div className="content"> 
            <MyScores 
            getId = {this.props.getId}
            scores = {this.props.scores}
            addPoint1={this.props.addPoint1}
            removePoint1={this.props.removePoint1}
            getTotal={this.props.getTotal}
            donations= {this.props.donations} />
            <MyList list = {this.props.list} />
            
            <MyDonations 
            donations = {this.props.donations}
            getAmount={this.props.getAmount}
            getDonations1={this.getDonations1}
            getTotal={this.props.getTotal} /> 
              <MyNotes notes={this.props.notes} />  
            </div>
          </div>
        );
    }

}

export default Homepage;