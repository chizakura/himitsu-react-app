import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import AnimeListing from './Components/AnimeListing';

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
        <div>
          <Route exact path="/" render={(props) => 
            <Home
              handleInputChange={this.handleInputChange}
              searchValue={this.state.searchValue}
            />
          }/>
          <Route exact path="/animelisting" render={() => <AnimeListing/>
          }/>
        </div>
    )
  }
}

export default App;