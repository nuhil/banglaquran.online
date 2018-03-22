import React, { Component } from 'react';
import logo from '../img/logo.png';

class Banner extends Component {
  render() {
    return (
      <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-success rounded box-shadow">
        <a href="/"><img className="mr-3" src={logo} alt="" width="80" /></a>
        <div className="lh-100">
            <a href="/" className="heading-title">
                <h6 className="mb-0 text-white lh-100">পবিত্র কুরআন</h6>
            </a>
            <small>বাংলা অনুবাদ</small>
        </div>
      </div>
    );
  }
}

export default Banner;
