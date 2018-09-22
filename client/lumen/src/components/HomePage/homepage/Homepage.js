import React, { Component } from 'react';
import MyList from '../list/MyList';
import MyNotes from '../notes/MyNotes';
import MyScores from '../scores/MyScores';
import MyDonations from '../donations/MyDonations';


class Homepage extends Component {

// pass props to components 

    render() {
        return (
          <div className="content"> 
            <MyScores 
            getId = {this.props.getId}
            scores = {this.props.scores}
            addPoint1={this.props.addPoint1}
            removePoint1={this.props.removePoint1} />
            <MyList list = {this.props.list} />
            <MyNotes notes ={ this.props.notes}/>
            <MyDonations 
            donations = {this.props.donations}
            getAmount={this.props.getAmount} />   
            </div>
        );
    }

}

export default Homepage;