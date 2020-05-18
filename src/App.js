import React, { Component } from 'react';
import Data from '../src/components/Data/Data'
import Header from '../src/components/Header/Header'
// import Buttons from '../src/components/Buttons/Buttons'


import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
 
    }
  }

  render(){

    return (
      <div className="App">
        <Header />
        <div className='content'>
        <Data />
        </div>
    </div>
  );
  }
}

export default App;
