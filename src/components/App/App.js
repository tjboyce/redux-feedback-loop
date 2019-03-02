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
            {/* <Route path="/feeling" component={Feeling} /> */}
            <Route exact path="/understanding" component={Understanding} />
            <Route path="/support" component={Support} />
            <Route path="/comment" component={Comment} />

          </div>
        </Router>  
        <br/>
        <div>
          <h1>Review Your Feedback</h1>
        </div>

        <div>
          <h3>Feelings: {this.props.firstReducer.feelings}</h3>
          <h3>Understanding: {this.props.firstReducer.understanding}</h3>
          <h3>Support: 0</h3>
          <h3>Comments: You got this!</h3>
        </div>
     
     
     </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
