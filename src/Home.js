import { Component } from 'react';
import './App.css';
import 'branch-mparticle-web-kit';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!window.branch) {
      console.warn('window.branch not defined at component mount');
      return;
    }

    window.branch.track('pageview', (err, data) => {
      console.log(`pageview error ${err}, response ${JSON.stringify(data)}`);
    });
  }

  componentWillUnmount() {
    if (!window.branch) {
      return;
    }

    window.branch.closeJourney(err => {
      if (err) {
        console.warn(`closeJourney error ${err}`);
      }
      else {
        console.log('closeJourney succeeded');
      }
    });
  }

  render() {
    return (
      <h2>Home</h2>
    );
  }
};
