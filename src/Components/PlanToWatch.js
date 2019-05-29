import React, {Component} from 'react';

class PlanToWatch extends Component {
    handleClick(event) {
        console.log("Does it work?")
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