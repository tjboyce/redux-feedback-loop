import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review'

class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleChange = (event) => {
        console.log('feelings handleChange', event);

        this.setState({
            understanding: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'SET_UNDERSTANDING', payload: this.state.understanding }
        this.props.dispatch(action);
        //clear 
        this.setState({
            understanding: '',
        })
           this.props.history.push ('/support');
    }





    render() {
        return (
            <div className="App">
              
              
                <h1>How well do you understand the content?</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Understanding?</label>
                    <br />
                    <input onChange={this.handleChange} placeholder="scale of 1-5" type='text' />
                    <br />
                    <input type="submit" value="Next" />
                </form>
            

                <br />
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

export default connect(mapReduxStateToProps)(Understanding);
