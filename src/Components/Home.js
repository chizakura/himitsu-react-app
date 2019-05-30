import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="app-header">
                    <div className="header">
                        <img className="right" src="/favicon.ico" alt="logo"/>
                        <h1>HIMITSU</h1>
                    </div>
                    <SearchBar
                        searchbar=""
                        handleInputChange={this.props.handleInputChange}
                        searchValue={this.props.searchValue}
                        handleSearch={this.props.handleSearch}
                    />
                    <div className="header">
                        <Link to="/animelisting">
                            <h3 className="right">Top 50 Anime</h3>
                        </Link>
                        <Link to="/plantowatch">
                            <h3>Plan To Watch</h3>
                        </Link>
                    </div>
                </div>
                <footer>
                    <div><a href="https://www.flaticon.com/" title="Flaticon">Icon</a> made by <a href="https://www.flaticon.com/authors/epiccoders" title="EpicCoders">EpicCoders</a> / <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC BY 3.0</a></div>
                </footer>
            </div>
        )
    }
}

export default Home;