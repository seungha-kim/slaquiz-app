import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {HELLO} from './actions';

function reducer(state = 0, action) {
  switch (action.type) {
    case HELLO: return state + 1
    default: return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)
