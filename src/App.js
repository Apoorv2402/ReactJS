import React, { useState } from 'react';
import './App.css';
import Users from './Components/Users';

function App() {
  const [text, setText] = useState();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);


  function updatetext(e) {
    let date = new Date();
    setId(date.getTime());
    setText(e.target.value)
    setShow(false)
  }
  function clearFunction() {
    setText(null);
    setId(null);

  }

  console.log(text);
  console.log(show)
  console.log(id)
  return (
    <div className="App">
      <br /><br /><br /><br />
      <input type="text" placeholder="Enter Text" onChange={updatetext} ></input><br /><br />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      <button onClick={clearFunction} >Clear</button>

        {show ? <Users name={text} userid={id}/> : null}
      
    </div>
  );
}

export default App;
