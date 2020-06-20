import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter,setCounter]=useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <button onClick={() => setCounter(counter+1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
