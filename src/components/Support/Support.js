import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review'

class Support extends Component {
    state = {
        support: '',
    }

    handleChange = (event) => {
        console.log('feelings handleChange', event);

        this.setState({
            support: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const action = { type: 'SET_SUPPORT', payload: this.state.support }
        this.props.dispatch(action);
       
        this.setState({
            support: '',
        })
        this.props.history.push('/comment');
    }





    render() {
        return (
            <div className="App">
                <h1>How well are you being Supported?</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Supported?</label>
                    <br />
                    <input onChange={this.handleChange} placeholder="scale of 1-5" type='text' />
                    <br />
                    <input type="submit" value="Next" />
                </form>
                <br />
                <br />
                <div>
                    <Review />
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Support);

