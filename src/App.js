
import { Component } from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: { firstName: 'diego', lastName: 'mora'},    
      company: 'j.town'
    }

  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi {this.state.name.firstName} {this.state.name.lastName} , i work at {this.state.company}
        </p>
        <button onClick={ ()=> {
          this.setState({name: {firstName: 'mario', lastName: 'mora'}})
          console.log(this.state)
          }}> entrar</button>
    
      </header>
    </div>
  );
  }  
}

export default App;
