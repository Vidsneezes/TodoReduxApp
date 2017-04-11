import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import todoApp from './reducers';
import './index.css';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions';


let store = createStore(todoApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
