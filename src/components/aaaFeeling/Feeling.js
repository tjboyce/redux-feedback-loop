// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../aotReview/Review';





class Feeling extends Component {
    state = {
        feelings: '',
    }

    handleChange = (event) => {
        console.log('feelings handleChange', event );
        
        this.setState({
            feelings: event.target.value,
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'SET_FEELINGS', payload: this.state.feelings }
        this.props.dispatch (action);
        //clear 
        this.setState({
            feelings: '',
        })
       this.props.history.push ('/understanding');
    }

    render() {
        return (
            <div className="App">
                <h1>How are you feeling today?</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Feeling?</label>
                    <br/>
                    <input onChange={this.handleChange} placeholder="scale of 1-5" type='text' value= {this.state.feelings} />
                    <br />
                    <input type="submit" value="Next" />
                </form>

                <br/>
                <div>
                    <Review />
                </div>
               
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Feeling);
