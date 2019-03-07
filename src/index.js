import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.scss';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';
//import {  } from './reducers' //add functions

const logger = createLogger();
const rootReducer = combineReducers({}) //add functions
const store = createStore(rootReducer ,applyMiddleware(thunkMiddleware ))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
