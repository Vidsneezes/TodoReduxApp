import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import todoApp from './reducers';
import './index.css';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions';


let store = createStore(todoApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));

store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETE))

unsubscribe();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
