import React, {Component} from 'react';
import NavBar from './NavBar';

class AnimeListing extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <NavBar
                    handleInputChange={this.props.handleInputChange}
                    searchValue={this.props.searchValue}
                />
                <h1>Hi</h1>
            </div>
        )
    }
}

export default AnimeListing;