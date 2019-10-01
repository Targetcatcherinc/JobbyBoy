import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import logger from 'redux-logger';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    
    if (window.currentUser) {
        store = configureStore();
        window.store = store;
        delete window.currentUser;
    } else {
        store = configureStore();
        window.store = store;
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});