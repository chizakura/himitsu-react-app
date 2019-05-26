import React, {Component} from 'react';
import SearchBar from './SearchBar';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="app-header">
                    <div className="header">
                        <img className="logo" src="/favicon.ico" alt="logo"/>
                        <h1>HIMITSU</h1>
                    </div>
                    <SearchBar
                        handleInputChange={this.props.handleInputChange}
                        searchValue={this.props.searchValue}
                    />
                <div className="header">
                    <h3 className="logo">Top 50 Anime</h3>
                    <h3>Plan To Watch</h3>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;