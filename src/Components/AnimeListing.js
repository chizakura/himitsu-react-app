import React, {Component} from 'react';
import NavBar from './NavBar';
import AnimeDetails from './AnimeDetails';

class AnimeListing extends Component {
    render() {
        return (
            <div>
                <NavBar
                    handleInputChange={this.props.handleInputChange}
                    searchValue={this.props.searchValue}
                    handleSearch={this.props.handleSearch}
                />
                <div className="grid-container">
                {this.props.animeList.map((anime, index) => {
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

export default AnimeListing;