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
            <MyScores scores = {this.props.scores} />
            <MyList list = {this.props.list} />
            <MyNotes notes ={ this.props.notes}/>
            <MyDonations donations = {this.props.donations} />   */}
            </div>
        );
    }

}

export default Homepage;