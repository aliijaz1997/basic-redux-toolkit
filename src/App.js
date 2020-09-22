import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import CounterDisplay from './components/counterdisplay';
function App() {
  return (
    <div className="App">
     <Counter/>
     <CounterDisplay/>
    </div>
  );
}

export default App;
