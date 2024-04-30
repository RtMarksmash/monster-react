
import { Component } from 'react';

import CardList from './componentes/card-list/card-list.component';
import SearchBox from './componentes/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

 

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=>
        this.setState(
          ()=>{
            return {monsters: users};

          },
          ()=>{
            console.log(this.state)
          }
        ) 
      
      )
  };


  onSearchChange = (event)=>{
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase()
    
  this.setState(()=>{
    return {searchField}
  })
   }

  render(){
    console.log('render')

    const { onSearchChange } = this;
    const { searchField , monsters } = this.state;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes( searchField )
    })

    return (
    <div className="App">
      <h1 className='app-title' >monster rolodex</h1>
      <SearchBox
      className='search-box-monster' 
      placeHolder='search monster'
      onChangeHandler={onSearchChange} />
     {/*  {
        filteredMonsters.map((monster)=>{
          return <h1 key={monster.id}>
            {monster.name}</h1>

        })
      } */}
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  }  
}

export default App;
