import React, { useState } from 'react';
import './App.css';
import Users from './Components/Users';

function App() {
  const [text, setText] = useState();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);

 
  function updatetext(val) {
    let date = new Date();
    setId(val.target.value + date.getTime());
    setText({name: val.target.value})
    setShow(false)
  }

console.log(text);
console.log(show)
console.log(id)
  return (
    <div className="App">
      <h1> Get Input Box Value !</h1>
      <input type="text" placeholder="Enter Text" onChange={updatetext} ></input><br /><br />
      <button onClick={()=>setShow(true)} >Add new User</button>
        <Users name = {text} userid = {id}/>      
    </div>
  );
}

export default App;
