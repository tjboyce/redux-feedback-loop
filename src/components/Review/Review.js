import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {


    handleClick = (event) => {
        event.preventDefault()
        axios({
            method: 'POST',
            url: '/review',
            data: this.props.firstReducer,
        }).then((response) => {
            this.props.history.push('/success')

        }).catch((error) => {
            alert('something went wrong with your POST')
        })

    }




    render() {
        let button = '';
        if (this.props.firstReducer.feelings !== '' && this.props.firstReducer.understanding !== '' && this.props.firstReducer.support !== '' && this.props.firstReducer.comment !== '') {
            button = <button onClick={this.handleClick}>Submit Feedback</button>
        }
        else {
            button = <button disabled>Incomplete</button>
        }

        return (
            <div className="App">


                <h1>Review Your Feedback</h1>
                <br />
                <div>
                    <div>
                        <h3>Feelings: {this.props.firstReducer.feelings}</h3>
                        <h3>Understanding: {this.props.firstReducer.understanding}</h3>
                        <h3>Support: {this.props.firstReducer.support}</h3>
                        <h3>Comments: {this.props.firstReducer.comment}</h3>
                    </div>
                </div>
                <br />
                {button}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);

