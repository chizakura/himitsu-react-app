import React, {Component} from 'react';

class AnimeDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.index} className="grid-item">
                {this.props.title}
            </div>
        )
    }
}

export default AnimeDetails;