/**
 * @overview The main application file responsible for configuration of the
 * application, the base redux store, the application history object, as well as
 * a react router for determining which pages to display based on browser URL.
 *
 * The overall structure here is more or less classic boilerplate for the top
 * level application. Here we create a Root element we render on the element in
 * the DOM identified by the 'root' id. We supply a "provider" with the redux
 * store, a "router" with a history object we can push/pop, and the main route
 * which renders the App component.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import history from './history';
import App from './App';

import './index.css';

/* eslint-disable arrow-body-style */
const Root = () => (
    <Router history={history}>
        <Route path="*" component={App} />
    </Router>
);
/* eslint-enable arrow-body-style */

ReactDOM.render(<Root />, document.getElementById('root'));
