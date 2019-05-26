import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <img className="right" src="/favicon.ico" alt="logo"/>
                <Link to="/"><h1 className="right">HIMITSU</h1></Link>
                <SearchBar
                    handleInputChange={this.props.handleInputChange}
                    searchValue={this.props.searchValue}
                />
                <div className="items">
                    <h3 className="right">Top 50 Anime</h3>
                    <h3 className="right">Plan To Watch</h3>
                </div>
            </nav>
        )
    }
}

export default NavBar;