// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';





class Comment extends Component {
    render() {
        return (
            <div className="App">
               
                <h1>Comment</h1>
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Comment);
