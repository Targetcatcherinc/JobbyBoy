import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: true } };
        store = configureStore(preloadedState);
        window.store = store;
        delete window.currentUser;
    } else {
        store = configureStore();
        window.store = store;
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});