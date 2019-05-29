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
        const onList = this.props.onList ? "indeterminate_check_box" : "add_box";
        return (
            <div onClick={this.handleClick}>
                <i className="material-icons">{onList}</i>
            </div>
        )
    }
}

export default PlanToWatch;