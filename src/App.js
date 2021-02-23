import './App.css';
import React from 'react'
// import HeroList from './components/HeroList'
import { heroDB } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: heroDB,
      entry: ''
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div id="app">
        </div>
        </header>
      </div>
    )};
}

export default App;
