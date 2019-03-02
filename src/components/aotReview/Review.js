// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import ReviewList from '../aotReviewList/ReviewList';

class Review extends Component {


    // handleClick = (event) => {
    //     axios({
    //         method: 'POST',
    //         url: '/review',
    //         data: this.props.firstReducer,
    //     }).then((response) => {
    //         this.props.history.push('/reviewList')
    //     }).catch((error) => {
    //         alert('something went wrong with your POST')
    //     })

    // }




    render() {

        return (
            <div className="App">


                <h1>Review Your Feedback</h1>
                <br />
                <div>
                    {this.props.firstReducer.feelings}
                    {this.props.firstReducer.understanding}
                    {this.props.firstReducer.support}
                    {this.props.firstReducer.comment}
                </div>
                <br />
                <button onClick={this.handleClick}>Submit Feedback</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);

