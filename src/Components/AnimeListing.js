import React, {Component} from 'react';
import NavBar from './NavBar';
import AnimeDetails from './AnimeDetails';

class AnimeListing extends Component {
    showResults() {
        if(!this.props.message) {
            return (
                <div className="grid-container">
                    {this.props.animeList.map((anime, index) => {
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
            )
        } else {
            return (
                <div>
                    <h2>{this.props.message}</h2>
                    <img className="message" src="https://media1.giphy.com/media/1gdie7aSKnSvhfr9NC/giphy.gif" alt="no-results"/>
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
                {this.showResults()}
            </div>
        )
    }
}

export default AnimeListing;