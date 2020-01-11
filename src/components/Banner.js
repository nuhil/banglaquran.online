import React, { Component } from 'react';
import logo from '../img/logo.png';

class Banner extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.handleRoute('home');
    }

    render() {
        return (
          <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-success rounded box-shadow">
            <a href="/" onClick={this.handleClick}>
                <img className="mr-3" src={logo} alt="" width="80" />
            </a>
            <div className="lh-100">
                <a href="/" onClick={this.handleClick} className="heading-title">
                    <h6 className="mb-0 text-white lh-100">পবিত্র কুরআন</h6>
                </a>
                <small>বাংলা অনুবাদ</small>
            </div>
          </div>
        );
    }
}

export default Banner;
