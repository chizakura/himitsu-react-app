import React, {Component} from 'react';
import NavBar from './NavBar';
import AnimeDetails from './AnimeDetails';

class PlanToWatchListing extends Component {
    showWatchList() {
        if(this.props.watchList.length === 0) {
            return (
                <div>
                    <h2>Nothing on your watch list yet!</h2>
                    <img src="https://media1.tenor.com/images/2c88a917bbe1144242c8669cb03b104f/tenor.gif" alt="waiting"/>
                </div>
            )
        } else {
            return(
                <div>
                    <h2>Your Plan to Watch List</h2>
                    <div className="grid-container">
                        {this.props.watchList.map((anime, index) => {
                            return (
                                <AnimeDetails
                                    key={index}
                                    anime={anime}
                                    title={anime.attributes.titles.en_jp}
                                    index={index}
                                    poster={this.props.checkPosterImage(anime.attributes.posterImage)}
                                    subtype={anime.attributes.subtype}
                                    status={anime.attributes.status}
                                    synopsis={anime.attributes.synopsis}
                                    handleWatchListToggle={this.props.handleWatchListToggle}
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
                />
                {this.showWatchList()}
            </div>
        )
    }
}

export default PlanToWatchListing;