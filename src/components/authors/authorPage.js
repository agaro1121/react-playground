'use strict';

const React = require('react');
const AuthorApi = require('../../api/authorApi');
const AuthorList = require('./authorList');
const { Link } = require('react-router-dom');


class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: AuthorApi.getAllAuthors() };
    }


    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to='author' className="btn btn-outline-dark">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }

}

module.exports = AuthorPage;