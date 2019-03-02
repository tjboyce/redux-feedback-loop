// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
    state = {
        comment: '',
    }

    handleChange = (event) => {
        console.log('comment handleChange', event);

        this.setState({
            comment: event.target.value,
        })
    }

    handleSubmit = () => {
        // event.preventDefault()
        const action = { type: 'SET_COMMENT', payload: this.state.comment }
        this.props.dispatch(action);
        //clear 
        this.setState({
            comment: '',
        })
        // this.props.history.push('/support');
    }





    render() {
        return (
            <div className="App">


                <h1>Any comments you want to leave?</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Comments</label>
                    <br />
                    <input onChange={this.handleChange} placeholder="Leave comments here" type='text' />
                    <br />
                    <input type="submit" value="Next" />
                </form>

                <br />
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Comment);

