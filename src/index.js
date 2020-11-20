import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mParticle from '@mparticle/web-sdk';
import BranchMetrics from 'branch-mparticle-web-kit';

const config = {};
BranchMetrics.register(config);
mParticle.init("ad0494840f664c488a4c924d97ae5fdf", config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
