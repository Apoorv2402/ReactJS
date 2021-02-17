import React, { Component,useState } from 'react'

function Users(props) {
    const mystyle = {
        border: "2px solid black",
        color: "white",
        width: "300px",
        margin: "20px auto",
        backgroundColor: "Gray",
        padding: "10px",
        fontFamily: "Arial"
    };
    // const{name, userid} = props;
    return (
        <div style={mystyle}>
            <h1>New User Added ...!</h1>
            <h3>Name: {props.name}</h3>
            <h3>User ID: {props.userid}</h3>
        </div>
    )

}

export default Users
