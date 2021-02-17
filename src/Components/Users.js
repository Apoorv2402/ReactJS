import React, { Component,useState } from 'react'

function Users(props) {
console.log(props)
    const mystyle = {
        border: "2px solid black",
        width: "300px",
        margin: "20px auto",
        padding: "10px",
        fontFamily: "Arial"
    };
    const{name, plan} = props;
    return (
        <div style={mystyle}>
            <h3>Name: {name}</h3>
            <h3>Plan: {plan}</h3>
            <button style={{backgroundColor:"red", width:"max-content", padding:"3px", margin:"3px 20px"}} onClick={props.deleteUser}>Delete user</button>
        </div>
    )

}

export default Users
