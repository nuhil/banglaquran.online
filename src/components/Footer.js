import React, { Component } from 'react';
import About from './About';

class Footer extends Component {
  render() {
    return (
        <div>
            <small className="d-block text-right mt-3">
              <a href="#about" data-toggle="modal" data-target="#about">সাইট সম্পর্কে</a>
            </small>
            <About />
        </div>
    );
  }
}

export default Footer;
