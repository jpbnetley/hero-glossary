import './App.css';
import React from 'react'
import HeroList from './components/HeroList'
import { heroDB } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: heroDB,
      entry: ''
    };
    this.removeHero = this.removeHero.bind(this)
  }

  // Add function Add new Hero entity
  addHero(){
    const { data, entry } = this.state
    const id = Math.floor(Math.random() * 100);
    const newHeroData = [...data, { id, heroName: entry} ]
    this.setState({ data: newHeroData})
  }

  // Add function to remove a Hero entity, passed down to HeroList component
  removeHero({target}){
    const idToDel = parseInt(target.id)
    const { data } = this.state
    const newHeroData = data.filter(({id}) => id !== idToDel)
    this.setState({ data: newHeroData})
  }

  // Function to input a new hero
  handleEntryInput({ target }){
    this.setState({ entry: target.value })
  }

  render(){
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
        <div id="app">
          <HeroList handleHeroRemove={this.removeHero} data={data} />
        </div>
          <input onChange={(e) => this.handleEntryInput(e)} type="text" />
          <button onClick={() => this.addHero()} >Add Hero</button>
        </header>
      </div>
    )};
}

export default App;
