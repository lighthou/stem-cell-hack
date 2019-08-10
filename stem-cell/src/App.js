import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="padded" align="right"> 
      <form id="submitform">
      <label class="inputlabel">Urine Result:  <input type="text" name="name" /></label><br></br>
      <label class="inputlabel">Blood Calcium levels:  <input type="text" name="name" /></label><br></br>
      <label class="inputlabel">Calcium Absorption:  <input type="text" name="name" /></label><br></br>
      <input type="submit" name="submit" align="center"/>
      </form>
      </div>
      
      </header>
    </div>
  );
}

export default App;
