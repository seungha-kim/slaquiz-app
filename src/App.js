import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';
import {increase, increaseAsync} from './actions';

class Counter extends Component {
  render() {
    const {count, handleClickIncrease, handleClickIncreaseAsync} = this.props;
    return <div>
      <p>{count}</p>
      <button onClick={handleClickIncrease}>increase</button>
      <button onClick={handleClickIncreaseAsync}>increaseAsync</button>
    </div>
  }
}

const CounterContainer = connect(
  state => ({count: state}),
  dispatch => ({
    handleClickIncrease: () => {
      dispatch(increase())
    },
    handleClickIncreaseAsync: () => {
      dispatch(increaseAsync())
    }
  })
)(Counter)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <CounterContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
