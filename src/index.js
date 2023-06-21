import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import TikiHeader from 'components/TikiHeader';
import TikiFooter from 'components/TikiFooter';

ReactDOM.render(
  <Router>
    <TikiHeader/>
    <App />
    <TikiFooter/>
  </Router>,
  document.getElementById('root')
);

