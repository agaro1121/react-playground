'use strict';

const React = require('react');

const { Route, Switch } = require('react-router-dom');
/*
* If path is not specific, then name is used i.e authors has path "/authors'
* */
const Routes = (
    <Switch>
        <Route exact path="/" component={ require('./components/homePage')} />
        <Route exact path="/authors" component= { require('./components/authors/authorPage') } />
        <Route exact path="/about" component= { require('./components/about/aboutPage') } />
    </Switch>
);

module.exports = Routes;
