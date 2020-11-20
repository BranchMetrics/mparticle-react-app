import './App.css';
import About from './About';
import Home from './Home';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import 'branch-mparticle-web-kit';

export default function App() {
  const closeJourney = () => {
    window.branch.closeJourney((err, data) => {
      console.log(`error: ${err}, data: ${JSON.stringify(data)}`);
    });
  };

  const trackPageview = () => {
    window.branch.track('pageview');
  };

  return (
    <Router>
      <div className='App-header'>
        <nav>
          <Link className='App-link' to='/home'>Home</Link>
          &nbsp;
          <Link className='App-link' to='/about'>About</Link>
        </nav>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/'>
            <Redirect to='/home'/>
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
