import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'branch-mparticle-web-kit';

export default class App extends Component {
  closeJourney() {
    window.branch.closeJourney((err, data) => {
      console.log(`error: ${err}, data: ${JSON.stringify(data)}`);
    });
  }

  trackPageview() {
    window.branch.track('pageview');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.closeJourney.bind(this)}>
            Close Journey
          </button>
          <button onClick={this.trackPageview.bind(this)}>
            Track Pageview
          </button>
        </header>
      </div>
    );
  }
};
