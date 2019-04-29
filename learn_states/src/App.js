import React from 'react';
import Lottery from './lottery/lottery';
import Ball from './lottery/ball';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Lottery/>
    <Lottery title={"mini-loto"} maxBall={4} />
    
    </div>
  );
}

export default App;
