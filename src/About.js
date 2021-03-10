import { Component } from 'react';
import './App.css';
import branch from 'branch-sdk';

export default class About extends Component {
  componentDidMount() {
    branch.closeJourney(() => {
      setTimeout(() => {
        const url = `${window.location.origin}/pure-journeys-demo/about`;
        console.log(`Logging pageview to ${url}`);
        branch.track('pageview', {}, { url: url });
      }, 1000);
    });
  }

  render() {
    return (
      <h2>About</h2>
    );
  }
};
