import React, {Component} from 'react';

class PlanToWatch extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleWatchListToggle(this.props.anime);
    }
    
    render() {
        return (
            <div onClick={this.handleClick}>
                <i className="material-icons">add_box</i>
            </div>
        )
    }
}

export default PlanToWatch;