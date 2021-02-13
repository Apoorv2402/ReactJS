import React, { Component } from 'react'

export class Users extends Component {
    constructor(){
     super();
        
    }
    render() {
        const mystyle = {
            border: "2px solid black",
            color: "white",
            width: "300px",
            margin :"20px auto",
            backgroundColor: "Gray",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            <div style={mystyle}>
                <h1>New User Added ...!</h1>
                <h3> Name : {this.props.name}</h3>
                <h3> User ID: {this.props.userid}</h3>
            </div>
        )
    }
}

export default Users
