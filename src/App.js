import './App.css';
import About from './About';
import Home from './Home';
import {
  Router,
  Redirect,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import branch from 'branch-sdk';

const browserHistory = createBrowserHistory();
browserHistory.listen(location => {
  /* Can use browser history events instead of component lifecycle events to detect route changes
  branch.closeJourney(() => {
    setTimeout(() => {
      const url = `${window.location.origin}${location.pathname}`;
      console.log(`Logging pageview to ${url}`);
      branch.track('pageview', {}, { url: url });
    }, 1000);
  });
  // */
});

export default function App() {
  const closeJourney = () => {
    branch.closeJourney((err, data) => {
      console.log(`error: ${err}, data: ${JSON.stringify(data)}`);
    });
  };

  const trackPageview = () => {
    branch.track('pageview');
  };

  return (
    <Router history={browserHistory}>
      <div className='App-header'>
        <nav>
          <Link className='App-link' to='/pure-journeys-demo/home'>Home</Link>
          &nbsp;
          <Link className='App-link' to='/pure-journeys-demo/about'>About</Link>
        </nav>
        <Switch>
          <Route path='/pure-journeys-demo/about'>
            <About/>
          </Route>
          <Route path='/pure-journeys-demo/home'>
            <Home/>
          </Route>
          <Route path='/'>
            <Redirect to='/pure-journeys-demo/home'/>
          </Route>
        </Switch>
        <button onClick={closeJourney}>
          Close Journey
        </button>
        &nbsp;
        <button onClick={trackPageview}>
          Track Pageview
        </button>
      </div>
    </Router>
  );
};
