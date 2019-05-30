import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import AnimeDetails from './AnimeDetails';

class Trending extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trendingList: []
        }

        this.getTrendingAnime = this.getTrendingAnime.bind(this);
        this.toggleMessage = this.toggleMessage.bind(this);
    }

    async getTrendingAnime(event) {
        event.preventDefault();
        const res = await axios("https://kitsu.io/api/edge/trending/anime");
        this.setState({
            trendingList: res.data.data
        })
    }

    toggleMessage() {
        if(this.state.trendingList.length === 0) {
            return (
                <h2 className="pointer" onClick={this.getTrendingAnime}>Click for Trending Anime</h2>
            )
        } else {
            return (
                <div>
                    <h2>Trending Anime</h2>
                    <div className="grid-container">
                        {this.state.trendingList.map((anime, index) => {
                            return (
                                <AnimeDetails
                                    key={index}
                                    anime={anime}
                                    title={anime.attributes.titles[Object.keys(anime.attributes.titles)[0]]}
                                    index={index}
                                    poster={this.props.checkPosterImage(anime.attributes.posterImage)}
                                    subtype={anime.attributes.subtype}
                                    status={anime.attributes.status}
                                    synopsis={anime.attributes.synopsis}
                                    handleWatchListToggle={this.props.handleWatchListToggle}
                                    onList={this.props.watchList.includes(anime)}
                                />
                            )
                        })}
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <NavBar
                    handleInputChange={this.props.handleInputChange}
                    searchValue={this.props.searchValue}
                    handleSearch={this.props.handleSearch}
                    activeLeft="active"
                />
                {this.toggleMessage()}
            </div>
        )
    }
}

export default Trending;