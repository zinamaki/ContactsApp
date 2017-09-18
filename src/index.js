import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import contactsApp from './reducers'

let store = createStore(contactsApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
