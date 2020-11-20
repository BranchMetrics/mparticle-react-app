import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mParticle from '@mparticle/web-sdk';
import BranchMetrics from 'branch-mparticle-web-kit';

const config = {
  isDevelopmentMode: true, //switch to false (or remove) for production
  identifyRequest: {
    userIdentities: {
      other3: 'otheridentity3',
      customerid: '123456',
    }
  },
  identityCallback: result => {
    // You can check if there's a populated user object, otherwise there was an error
    // You can also inspect the result.httpCode - see below for a description of the supported codes
    if (result.getUser()) {
        result.getUser().setUserAttribute('age', '25');
    } else {
        //the IDSync call failed - see below for more details on failed requests
    }
  },
};

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
