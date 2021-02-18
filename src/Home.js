import { Component } from 'react';
import './App.css';
import branch from 'branch-sdk';

export default class Home extends Component {
  componentDidMount() {
    branch.closeJourney(() => {
      setTimeout(() => {
        const url = `${window.location.origin}/journeys-demo/home`;
        console.log(`Logging pageview to ${url}`);
        branch.track('pageview', {}, { url: url });
      }, 1000);
    });
  }

  render() {
    return (
      <h2>Home</h2>
    );
  }
};
