import React, {Component} from 'react';
import NavBar from './NavBar';

class PlanToWatchListing extends Component {
    render() {
        return (
            <div>
                <NavBar
                    handleInputChange={this.props.handleInputChange}
                    searchValue={this.props.searchValue}
                    handleSearch={this.props.handleSearch}
                />
                <h2>Your Plan to Watch List</h2>
                <div className="grid-container"></div>
            </div>
        )
    }
}

export default PlanToWatchListing;