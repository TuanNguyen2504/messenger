import App from 'App';
import 'common/util/index.scss';
import HookThemeProvider from 'customs/HookThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';

console.clear();

ReactDOM.render(
  <Provider store={store}>
    <HookThemeProvider>
      <App />
    </HookThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
