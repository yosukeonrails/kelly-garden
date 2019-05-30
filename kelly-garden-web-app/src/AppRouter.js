import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import './App.scss';

const AppRouter = () => (
  <Router>
    {/* <Route path="/" render={props => <Header {...props} />} /> */}
    <Route path="/" render={props => <Landing {...props} />} />
  </Router>
);

export default AppRouter;
