import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'; // tracks redux state before and after
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

const reduxState = {feelings: '', understanding: '', support: '', comment: ''};

const firstReducer = (state = reduxState, action) => {
    console.log(action.payload);
    if (action.type === 'SET_FEELINGS'){
        return {...state, feelings: action.payload};
    }
   else if (action.type === 'SET_UNDERSTANDING') {
        return { ...state, understanding: action.payload };
    }
    else if (action.type === 'SET_SUPPORT') {
        return { ...state, support: action.payload };
    }
    else if (action.type === 'SET_COMMENT') {
        return { ...state, comment: action.payload };
    }
    else if (action.type === 'CLEAR_STATE'){
        return reduxState;
    }
    return state; 
}

const submit = (state = [], action )=>{
    console.log(action.payload);
    if (action.type === 'SET_SUBMIT'){
        return action.payload;
    }
    return state; 
}




const storeInstance = createStore(
    combineReducers({
     firstReducer, 
     submit, 
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
