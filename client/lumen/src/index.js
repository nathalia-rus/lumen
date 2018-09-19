import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
// user reducer and products reducer

// let's create a very basic reducer function for now 
function reducer(state, action) {
  if (action.type === 'changeState') {
    return action.payload.newState;
  }
  return "State" ;
}
const store = createStore(reducer); 
console.log(store.getState())

const action = {
  type: 'changeState',
  payload: {
    newState: "New State"
  }
}

store.dispatch(action);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
