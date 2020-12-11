import { Component } from 'react';
import './App.css';

export default class About extends Component {
  componentDidMount() {
    if (!window.branch) {
      console.warn(`window.branch is ${window.branch}`);
      return;
    }

    window.branch.closeJourney(() => {
      setTimeout(() => {
        const url = `${window.location.origin}/journeys-demo/about`;
        console.log(`Logging pageview to ${url}`);
        window.branch.track('pageview', {}, { url: url });
      }, 1000);
    });
  }

  render() {
    return (
      <h2>About</h2>
    );
  }
};
