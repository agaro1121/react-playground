
/*eslint-disable strict*/

const React = require('react');
const Header = require('./common/header');
const { HashRouter } = require('react-router-dom');

$ = jQuery = require('jquery'); //global variable

const routes = require('../routes');

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    {routes}
                </div>
            </HashRouter>
        );
    }
}

module.exports = App;