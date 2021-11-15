import React, { useState } from 'react';
import GameField from './components/molecules/GameField/GameField';
import Chat from './components/organisms/Chat/Chat';
import './App.css'


function App() {


  return (
    <div className="App">
      <GameField/>
      <Chat/> 
    </div>
  );
}

export default App;
