import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

import store from './store';
import logo from './logo.svg';
import './App.css';
import {increase, increaseAsync} from './actions';
import LogInScreenContainer from './containers/LogInScreenContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={LogInScreenContainer} />
            <Route path="/main" render={() => (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
              </div>
            )}/>
            <Redirect to="/login" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
