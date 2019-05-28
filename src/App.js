import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home';
import AnimeListing from './Components/AnimeListing';
import PlanToWatchListing from './Components/PlanToWatchListing';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      animeList: [],
      watchList: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      searchValue: value
    })
  }

  async handleSearch(event) {
    event.preventDefault();
    const searchValue = this.state.searchValue;
    const first = await axios(`https://kitsu.io/api/edge/anime?page[limit]=20&filter[text]=${searchValue}`)
    const next = await axios(first.data.links.next);
    const last = await axios(first.data.links.last);
    const filterArray = first.data.data.concat(next.data.data, last.data.data);
    this.setState({
      searchValue: "",
      animeList: filterArray
    })
  }

  render() {
    // console.log(this.state.animeList)
    return (
        <div>
          <Route exact path="/" render={(props) => 
            <Home
              handleInputChange={this.handleInputChange}
              searchValue={this.state.searchValue}
              handleSearch={this.handleSearch}
            />
          }/>
          <Route exact path="/animelisting" render={() => 
            <AnimeListing
              handleInputChange={this.handleInputChange}
              searchValue={this.state.searchValue}
              handleSearch={this.handleSearch}
              animeList={this.state.animeList}
            />
          }/>
          <Route exact path="/plantowatch" render={() =>
            <PlanToWatchListing
              handleInputChange={this.handleInputChange}
              searchValue={this.state.searchValue}
              handleSearch={this.handleSearch}
              watchList={this.state.watchList}
            />
          }/>
        </div>
    )
  }
}

export default App;