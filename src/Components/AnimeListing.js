import React, {Component} from 'react';
import NavBar from './NavBar';

class AnimeListing extends Component {
    render() {
        // console.log(this.state.animeList)
        return (
            <div>
                <NavBar
                    handleInputChange={this.props.handleInputChange}
                    searchValue={this.props.searchValue}
                />
                <h1>Hi</h1>
                {/* {this.state.animeList.map((title) => {
                    return (
                        <div>{title.title}</div>
                    )
                })} */}
            </div>
        )
    }
}

export default AnimeListing;