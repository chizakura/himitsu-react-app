import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.props.handleInputChange(value);
        
    }

    render() {
        return (
            <form>
                <label name="search">Search: </label>
                <input name="search" type="text" value={this.props.searchValue} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default SearchBar;