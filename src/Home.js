import { Component } from 'react';
import './App.css';

export default class Home extends Component {
  componentDidMount() {
    if (!window.branch) {
      console.warn(`window.branch is ${window.branch}`);
      return;
    }

    window.branch.closeJourney(() => {
      setTimeout(() => {
        const url = `${window.location.origin}/journeys-demo/home`;
        console.log(`Logging pageview to ${url}`);
        window.branch.track('pageview', {}, { url: url });
      }, 1000);
    });
  }

  render() {
    return (
      <h2>Home</h2>
    );
  }
};
