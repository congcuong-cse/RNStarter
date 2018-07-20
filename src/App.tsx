import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TodoApp from './TodoApp';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <TodoApp/>}
      </Provider>
    );
  }
}
