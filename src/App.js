
import { Component } from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'diego',    
      company: 'j.town'
    }

  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi {this.state.name} , i work at {this.state.company}
        </p>
        <button onClick={ ()=> {
          this.setState({name: 'mario'})}}> entrar</button>
    
      </header>
    </div>
  );
  }  
}

export default App;
