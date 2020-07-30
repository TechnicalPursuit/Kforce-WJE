/**
 * @overview The 'App' component rendered by the top-level index file. NOTE that
 * the app widget essentially just switches between our dashboard and desktop
 * page components based on the matching route. This is a typical use of React
 * Router, Switch, and Redirect operations.
 */

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/ui" component={Dashboard} />
                    <Redirect exact from="/" to="/ui" />
                </Switch>
            </div>
        );
    }
}

export default App;
