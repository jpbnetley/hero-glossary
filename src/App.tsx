import './App.css';
import { ChangeEvent, Component } from 'react'
import HeroList from './components/HeroList'
import { heroDB } from './data';

export type AppState = {
  data: {
    heroName: string;
    id: number;
  }[];
  entry: string;
}

export type AppProps = {};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: heroDB,
      entry: "",
    };
    this.removeHero = this.removeHero.bind(this);
  }

  handleEntryInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      entry: e.target.value,
    });
  }

  generateId() {
    let random = Math.random();
    let twoDes = random * 100;
    return Math.round(twoDes);
  }

  addHero() {
    console.log("adding hero")
    let id = this.generateId();
    let { data, entry } = this.state;
    let updatedHeros = data.concat({
      heroName: entry,
      id: id,
    });

    this.setState({
      data: updatedHeros,
    });
  }

  removeHero(id: number) {
    let { data } = this.state;
    let updated = data.filter((hero) => hero.id !== id);
    this.setState({
      data: updated,
    });
  }

  render() {
    let { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div id="app"></div>

          <label htmlFor='hname'>Hero name</label>
          <input
            id="hname"
            type="text"
            onChange={(e) => this.handleEntryInput(e)}
          ></input>
          <button 
          type="button"
          onClick={() => this.addHero()}>Add Hero</button>
          <HeroList data={data} handleHeroRemove={this.removeHero} />
        </header>
      </div>
    );
  }
}

export default App;
