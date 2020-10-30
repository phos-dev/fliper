import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/fonts.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {catalogController, pageController, profileController} from './reducers';
import 'tachyons';

const rootReducer = combineReducers({catalogController, pageController, profileController});
const store = createStore(rootReducer, applyMiddleware(createLogger()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
