import logo from './logo.svg';
import './App.css';
import React from 'react';
import './mparticle'; // defines window.mParticle
import 'branch-mparticle-web-kit';

class App extends React.Component {
  render() {
    const closeJourney = () => {
      window.branch.closeJourney((err, data) => {
        console.log(`error: ${err}, data: ${JSON.stringify(data)}`)
      });
    };
    const trackPageview = () => {
      window.branch.track('pageview');
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={closeJourney}>
            Close Journey
          </button>
          <button onClick={trackPageview}>
            Track Pageview
          </button>
        </header>
      </div>
    );
  }
}

export default App;
