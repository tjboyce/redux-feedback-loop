// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';





class Understanding extends Component {
    render() {
        return (
            <div className="App">
              
               <h1>Understanding</h1>
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Understanding);
