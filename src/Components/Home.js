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
                        handleInputChange={this.props.handleInputChange}
                        searchValue={this.props.searchValue}
                        handleSearch={this.props.handleSearch}
                    />
                <div className="header">
                    <Link to="/animelisting">
                        <h3 className="right">Top 50 Anime</h3>
                    </Link>
                    <h3>Plan To Watch</h3>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;