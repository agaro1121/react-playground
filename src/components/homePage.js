'use strict';

const React = require('react');

/*const Home = React.createClass({
    render: function() {
        return(
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>React, react router, Flux</p>
            </div>
        )
    }
});*/

/*
const Home = ( props ) => {
    return(
        <div className="jumbotron">
            <h1>Pluralsight Admin</h1>
            <p>React, react router, Flux</p>
        </div>
    )
};
*/

class Home extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>React, react router, Flux</p>
            </div>
        )
    }
}


module.exports = Home;