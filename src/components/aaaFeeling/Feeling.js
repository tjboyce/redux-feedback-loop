// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';





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
                    <input onChange={this.handleChange} placeholder="name" type='text' value= {this.state.feelings} />
                    <br />
                    <input type="submit" value="Next" />
                </form>

                <br/>
                {/* <div>
                    <h1>Review Your Feedback</h1>
                </div>
               
                <div>
                    <h3>Feelings: {this.props.firstReducer}</h3>
                    <h3>Understanding: 0</h3>
                    <h3>Support: 0</h3>
                    <h3>Comments: You got this!</h3>
                </div> */}
               
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Feeling);
