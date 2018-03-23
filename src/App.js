import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ListItems from './components/ListItems';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: 'home'
        }

        this.handleRoute = this.handleRoute.bind(this);
    }

    handleRoute(route) {
        this.setState({ route });
    }

    render() {
        return (
            <main role="main" className="container">
                <Banner handleRoute={this.handleRoute} />
                <div className="item my-3 p-3 bg-white rounded box-shadow">
                    <ListItems route={this.state.route} handleRoute={this.handleRoute} />
                    <Footer />
                </div>
            </main>
        );
    }
}

export default App;
