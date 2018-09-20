import React, { Component } from 'react';
import MyList from '../list/MyList';
import MyNotes from '../notes/MyNotes';
import MyScores from '../scores/MyScores';
import MyDonations from '../donations/MyDonations';

class Homepage extends Component {
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
          <div className="content"> 
            <MyScores />
            <MyList />
            <MyNotes />
            <MyDonations />  
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

export default Homepage;