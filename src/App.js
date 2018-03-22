import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ListItems from './components/ListItems';

class App extends Component {
  render() {
    return (
        <main role="main" className="container">
            <Banner />
            <div className="item my-3 p-3 bg-white rounded box-shadow">
                <ListItems />
                <Footer />
            </div>
        </main>
    );
  }
}

export default App;
