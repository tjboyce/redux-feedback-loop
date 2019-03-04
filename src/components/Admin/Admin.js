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
            alert('Oops. We had trouble GETting your items from our records')
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
             <td><button>Delete</button></td>
            </tr>
        )
    }

    deleteFeedback = (event) =>{
        axios({
            method: 'GET',
            url: '/delete',
        }).then((response) => {
            this.setState({
                results: response.data
            });
        }).catch((error) => {
            alert('could not get results');
            console.log('could not get results', error);
        })
    }
    





    render() {
        return (
            <div className="App">
                <h1>Welcome to the Admin Page</h1>
                <br></br>
                <div className="App">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Feeling</th>
                                <th>Understanding</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.adminItems()}
                        </tbody>

                    </table>

                    <button onClick={this.onSubmit}>Home</button>

                </div>

        );
                        
            
                
            </div>
        );
    }
}



export default Admin;
