import React, { Component } from 'react';
import PlaybackIcon from './PlaybackIcon';

class VerseItem extends Component {
    constructor(props) {
        super(props);
        this.handlePlay = this.handlePlay.bind(this);

        this.state = {
            isPlaying: false
        }
    }

    handlePlay() {
        this.setState({ isPlaying: true }, () => {
            this.playback.play();
            this.playback.onended = () => {
                this.setState({ isPlaying: false });
            }
        });
    }

    render() {
        return (
            <div id={this.props.index} className="chapter media text-muted pt-3">
                <div className="index-box rounded">
                    <span>{this.props.index}</span>
                </div>
                <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                    <span className="d-block text-gray-dark">{this.props.arabic}
                        <PlaybackIcon
                            handleClick={this.handlePlay}
                            isPlaying={this.state.isPlaying}
                        />
                    </span>

                    <audio
                        ref={(playback) => { this.playback = playback;}}
                        src={this.props.audio.url}>
                    </audio>
                    <span>{this.props.bangla}</span>
                </p>
            </div>
        );
    }
}

export default VerseItem;
