import React, { useState } from 'react';
import './App.css';
import { Route,Link } from 'react-router-dom';
import Users from './Components/Users';

function App() {
  let user = [
    {id:1, name: 'apoorv', email:'apoorv@gmail.com'},
    {id:2, name: 'dhimkana', email:'karamana@gmail.com'},
    {id:3, name: 'karana', email:'karana@gmail.com'},
    {id:4, name: 'Falana', email:'falana@gmail.com'},
    {id:6, name: 'kilkana', email:'kilkana@gmail.com'},
    {id:5, name: 'Chintana', email:'Chinta@gmail.com'},
]
  return (
    <div className="App">
      {user.map((item)=>
      <div key={item.id}>
        <Link to={`/user/${item.name}/${item.id}`}>{item.name }</Link>
      </div>  )}
      <Route path="/user/:name/:id"><Users /></Route>
    </div>
  )
}


export default App;
