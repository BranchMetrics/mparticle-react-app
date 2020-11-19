import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mparticle'; // defines window.mParticle
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@mparticle/branch-web-kit';

window.mParticle.forwarder.init({branchKey: 'key_live_josS8XQjiiSEp8XAEfOymdpdusaRIdAM'}, () => {

});

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
