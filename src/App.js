import './App.css';
import React from 'react'
import HeroList from './components/HeroList'
import { heroDB } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: heroDB,
      entry: "",
    };
  }

  handleEntryInput() {
    let { data } = this.state;
    let heroName = document.querySelector("#hname").value;
    this.setState({
      data: data,
      entry: heroName,
    });
  }

  generateId() {
    let random = Math.random();
    let twoDes = random * 100;
    return Math.round(twoDes, 0);
  }

  addHero() {
    let id = this.generateId();
    let { data, entry } = this.state;
    let updatedHeros = data.concat({
      heroName: entry,
      id: id,
    });

    this.setState({
      data: updatedHeros,
      entry: null,
    });
  }

  removeHero(id) {
    let {data} = this.state
    let updated = data.filter(hero => hero.id === id)
    this.setState({
      data: updated
    })
  }

  render() {
    let { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div id="app"></div>
        </header>

        <label for="hname">Hero name</label>
        <input id="hname" type="text"></input>
        <input type="button" onClick={this.handleEntryInput}>
          Add Hero
        </input>
        <HeroList data={data} handleHeroRemove={this.removeHero} />
      </div>
    );
  }
}

export default App;
