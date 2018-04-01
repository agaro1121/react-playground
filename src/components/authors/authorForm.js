'use strict';

const React = require('react');

class AuthorForm extends React.Component {
    render() {
        return (
            <form>
                <h1>Manage Author</h1>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                       className="form-control"
                       placeholder="First Name"
                       ref="firstName"
                       value=""/>
                <br/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                       className="form-control"
                       placeholder="Last Name"
                       ref="lastName"
                       value=""/>
                <br/>

                <input type="submit" value="Save" className="btn btn-outline-dark"/>

            </form>
        );
    }
}

module.exports = AuthorForm;
