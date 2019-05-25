import React, {Component} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      searchValue: value
    })
  }

  handleSearch() {
  }

  render() {
    return (
      <div className="app-header">
        <div className="header">
          <img className="logo" src="/favicon.ico" alt="logo"/>
          <h1>HIMITSU</h1>
        </div>
        <SearchBar
          handleInputChange={this.handleInputChange}
          searchValue={this.state.searchValue}
        />
      </div>
    )
  }
}

export default App;