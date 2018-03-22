import React, { Component } from 'react';
import play from '../img/play.png';
import pause from '../img/pause.png';

class PlaybackIcon extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick();
    }

    render() {
        return (
            this.props.isPlaying ? (
                <img onClick={this.handleClick} className="playback" src={pause} alt="pause" />
            ): (
                <img onClick={this.handleClick} className="playback" src={play} alt="play" />
            )
        );
    }
}

export default PlaybackIcon;
