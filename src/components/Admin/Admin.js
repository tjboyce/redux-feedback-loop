
import React, { Component } from 'react';

import axios from 'axios';


class Admin extends Component {
        state = {
            review: [],
        }
    
    componentDidMount(){
        this.getReview();
    }

    getReview = (event) => {
        axios({
            method: 'GET',
            url: '/review',
           }).then((response) => {
            this.setState({
                review: response.data,
            })
        }).catch((error) => {
            alert('something went wrong with your GET')
        })

    }
    adminItems (){
         return this.state.review.map (review =>
            <tr key= {review.id}>
            <td>{review.id}</td>
            <td>{review.feeling}</td>
            <td>{review.understanding}</td>
            <td>{review.support}</td>
            <td>{review.comments}</td>
            {/* // <td><button>Delete</button></td> */}
            </tr>
        )
    }




    render() {
        return (
            <div className="App">


                <h1>Welcome to the Admin Page</h1>
                <br />
                
                {this.adminItems()}
                
            </div>
        );
    }
}



export default Admin;
