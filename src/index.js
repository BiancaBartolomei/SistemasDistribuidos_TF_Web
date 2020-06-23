import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login.js';
import Main from './Main.js';
import Place from './Place.js';
import All from './All.js';
import Edit from './Edit.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/place" component={Place} />
            <Route path="/all" component={All} />
            <Route path="/edit" component={Edit} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
