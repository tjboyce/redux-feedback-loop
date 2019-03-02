import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'; // tracks redux state before and after
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

const firstReducer = (state = [], action) => {
    console.log(action.payload);
    if (action.type === 'SET_FEELINGS'){
        return action.payload
    }
   
    return state;
}




const storeInstance = createStore(
    combineReducers({
     firstReducer, 
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
