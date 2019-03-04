
import React, { Component } from 'react';
import { connect } from 'react-redux';



class Success extends Component {

    handleClick = ()=>{
      
        this.props.history.push('/');
        this.props.dispatch({type: 'CLEAR_STATE'})
    }




    render() {

        return (
            <div>
            <h1>Thank You!</h1>
            <button onClick= {this.handleClick}>Leave New Feedback</button>
            </div>
        ) 
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Success);