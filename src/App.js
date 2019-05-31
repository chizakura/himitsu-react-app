import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home';
import AnimeListing from './Components/AnimeListing';
import PlanToWatchListing from './Components/PlanToWatchListing';
import Trending from './Components/Trending';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      animeList: [],
      watchList: [],
      message: "",
      idList: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.checkPosterImage = this.checkPosterImage.bind(this);
    this.handleWatchListToggle = this.handleWatchListToggle.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      animeList: [],
      searchValue: value
    })
  }

  async handleSearch(event) {
    event.preventDefault();
    this.props.history.push('/animelisting');
    const searchValue = this.state.searchValue;
    let filterArray = [];
    const first = await axios(`https://kitsu.io/api/edge/anime?page[limit]=20&filter[text]=${searchValue}`);
    if(first.data.meta.count === 0) {
      this.setState({
        message: "No result",
        searchValue: ""
      })
    } else if(first.data.meta.count >= 20) {
      const next = await axios(first.data.links.next);
      const last = await axios(first.data.links.last);
      filterArray = first.data.data.concat(next.data.data, last.data.data);
      this.setState({
        message: ""
      })
    } else {
      filterArray = first.data.data;
      this.setState({
        message: ""
      })
    }
    
    this.setState({
      searchValue: "",
      animeList: filterArray
    })
  }

  checkPosterImage(poster) {
      if(poster === null) {
          return ("https://res.cloudinary.com/chizakura/image/upload/v1559072918/Project%202/no_image_available.jpg")
      } else {
          return (poster.large)
      }
  }

  handleWatchListToggle(anime) {
    let newWatchList = [...this.state.watchList];
    let newIdList = newWatchList.map((anime) => {
      return (anime.id)
    })
    const idIndex = newIdList.indexOf(anime.id);
    if(idIndex > -1) {
      newWatchList.splice(idIndex, 1);
      newIdList.splice(idIndex, 1);
    } else {
      newWatchList.push(anime);
      newIdList.push(anime.id)
    }
    this.setState({
      watchList: newWatchList,
      idList: newIdList
    })
  }

  render() {
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
              checkPosterImage={this.checkPosterImage}
              handleWatchListToggle={this.handleWatchListToggle}
              message={this.state.message}
              idList={this.state.idList}
            />
          }/>
          <Route exact path="/plantowatch" render={() =>
            <PlanToWatchListing
              handleInputChange={this.handleInputChange}
              searchValue={this.state.searchValue}
              handleSearch={this.handleSearch}
              watchList={this.state.watchList}
              checkPosterImage={this.checkPosterImage}
              handleWatchListToggle={this.handleWatchListToggle}
            />
          }/>
          <Route exact path="/trending" render={() => 
            <Trending
              handleInputChange={this.handleInputChange}
              searchValue={this.state.searchValue}
              handleSearch={this.handleSearch}
              checkPosterImage={this.checkPosterImage}
              handleWatchListToggle={this.handleWatchListToggle}
              idList={this.state.idList}
            />
          }/>
        </div>
    )
  }
}

export default withRouter(App);