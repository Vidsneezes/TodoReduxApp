import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import todoApp from './reducers';
import './index.css';

//TODO #1 finish by comparing with http://redux.js.org/docs/basics/ExampleTodoList.html

//TODO #2 implemente immutable js

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
