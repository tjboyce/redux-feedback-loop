// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    state = {
        feelings: '',
        understanding: '',
        support: '',
        comment: '',
    }

    handleClick = ()=>{
        console.log(this.state);
        
        this.props.dispatch({
            type: 'SUBMIT_CLICK', payload: this.state.feelings })
    }




    render() {

        return (
            <div className="App">


                <h1>Review Your Feedback</h1>
                <br />
                
                <br />
                <button onClick = {this.handleClick}>Submit Feedback</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);

