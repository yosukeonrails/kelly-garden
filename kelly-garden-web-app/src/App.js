import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" render={props => <Landing {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
