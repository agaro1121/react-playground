'use strict';

const React = require('react');

const AuthorForm = require('./authorForm');

const ManageAuthorsPage = (props) => {

    return(
        <div>
            <h1>Manage Authors</h1>
            <AuthorForm />
        </div>
    );

};

module.exports = ManageAuthorsPage;