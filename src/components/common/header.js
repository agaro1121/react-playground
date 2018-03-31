'use strict';

const React = require('react');

const {Link} = require('react-router-dom');

const Header = (props) => {
    return(
        <nav className="navbar navbar-toggler navbar-light bg-light">
            <a href="/" className="navbar-brand">
                <img src="images/bat-signal.jpg" />
            </a>
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    {/*<li className="nav-item"><a className="nav-link" href="/">Home</a></li>*/}
                    {/*<li className="nav-item"><a className="nav-link" href="/#about">About</a></li>*/}
                    {/*<li className="nav-item"><a className="nav-link" href="/#authors">Authors</a></li>*/}
                    <li className="nav-item" >
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to={'/authors'} className="nav-link">Authors</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to={'/about'} className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>

        /*<nav className="navbar navbar-toggler navbar-light bg-light">

        <a href={'/'}  className="navbar-brand">
        <img src="images/bat-signal.jpg" />
        </a>

    <div className="container-fluid">
        <ul className="nav nav-tabs">
            <li className="nav-item" >
                <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item" >
                <Link to={'/authors'} className="nav-link">Authors</Link>
            </li>
            <li className="nav-item" >
                <Link to={'/about'} className="nav-link">About</Link>
            </li>
        </ul>
        <hr />
    </div>
    </nav>
    */
    );
};

module.exports = Header;
