import React, { Component } from 'react';

class ChapterItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
            <div onClick={this.handleClick}  id={this.props.index} className="chapter media text-muted pt-3">
                <div className="index-box rounded">
                    <span>{this.props.index}</span>
                </div>
                <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                    <span className="d-block text-gray-dark">{this.props.arabic}</span>
                    <span>{this.props.bangla}</span>
                </p>
            </div>
        );
    }
}

export default ChapterItem;
