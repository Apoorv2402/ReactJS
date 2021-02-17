import React, { useState } from 'react';
import './App.css';
import Users from './Components/Users';

function App() {

  const [name,setName] = useState('');
  const [tnc,setTnc] = useState(false);
  const [plan,setPlan] = useState('');

  function getFormData(e) {
    e.preventDefault()
    console.log(name,tnc,plan)
    
  }
;  return (
    <div className="App">

  <form onSubmit={getFormData}>
    <h3>Form Handling in React</h3>
    <input type="text" name="name" placeholder="Enter Username" onChange={(e)=>setName(e.target.value)}></input><br />
    <label>Choose Plan:</label>
    <span><select onChange={(e)=>setPlan(e.target.value)}>
      <option>Basic</option>
      <option>Standard</option>
      <option >Premium</option>
    </select></span>
    <br />
    <input id="checkbox" type="checkbox"onChange={(e)=>setTnc(e.target.checked)}></input><span>Accept all the Terms and conditions</span>
  <button type="submit" >SignUp</button>
  </form>
    </div>
  );
}

export default App;
