import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// import { createStore } from "redux";
// import reducer from "./redux/reducers";
// import { Provider } from "react-redux";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
