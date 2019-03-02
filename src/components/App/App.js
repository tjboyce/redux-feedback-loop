// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header.js';
import Feeling from '../aaaFeeling/Feeling.js';
import Understanding from '../aaUnderstanding/Understanding';
import Support from '../aoSupport/Support';
import Comment from '../aotComment/Comment';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        
        <Router>
          <div>
           
            <Route exact path="/" component={Feeling} />
            <Route path="/feeling" component={Feeling} />
            <Route path="/understanding" component={Understanding} />
            <Route path="/support" component={Support} />
            <Route path="/comment" component={Comment} />

          </div>
        </Router>  
        <br/>
        
     
     
     </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
