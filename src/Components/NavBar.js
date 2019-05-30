import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logo">
                    <img className="right" src="/favicon.ico" alt="logo"/>
                    <Link to="/"><h1 className="right">HIMITSU</h1></Link>
                </div>
                <SearchBar
                    searchbar="searchbar right"
                    handleInputChange={this.props.handleInputChange}
                    searchValue={this.props.searchValue}
                    handleSearch={this.props.handleSearch}
                />
                <div className="right-nav">
                    <Link to="/plantowatch">
                        <h3>Plan To Watch</h3>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;