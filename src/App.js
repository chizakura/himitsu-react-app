import React, {Component} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="header">
          <img className="logo" src="/favicon.ico" alt="logo"/>
          <h1>HIMITSU</h1>
        </div>
        <SearchBar/>
      </div>
    )
  }
}

export default App;