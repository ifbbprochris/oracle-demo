import React from 'react';
import './App.css';
import Oracle from './components/Oracle/Oracle';

const App = () => {
  
  return (
    <div className="App">
      <header></header>
      <div className="Flex-box">
        <div className="Flex-center">
          <Oracle/>
        </div>
        <div className="Flex-left"></div>
        <div className="Flex-right"></div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
