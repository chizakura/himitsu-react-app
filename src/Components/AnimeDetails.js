import React, {Component} from 'react';
import PlanToWatch from './PlanToWatch';

class AnimeDetails extends Component {
    render() {
        return (
            <div key={this.props.index} className="grid-item">
                <img className="poster" src={this.props.poster} alt="poster"/>
                <div className="anime-summary">
                    <h4>{this.props.title}</h4>
                    <p className="capital">{this.props.subtype} | <span>{this.props.status}</span></p>
                    <p>{this.props.synopsis}</p>
                </div>
                <PlanToWatch/>
            </div>
        )
    }
}

export default AnimeDetails;