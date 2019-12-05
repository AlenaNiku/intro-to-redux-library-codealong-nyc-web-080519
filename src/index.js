// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
     ,document.getElementById('root')
);


// We want to import createStore() in our src/index.js file, where ReactDOM renders our application.

// To avoid passing store as a prop, we use the Provider component, which is imported from react-redux. The Provider component wraps the top level component, App, in this case, and is the only component where store is passed in