'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class AuthorList extends React.Component {

    createAuthorRow( author ) {
        console.log(author);
        return (
            <tr key={author.id}>
                <td><a href={`#/authors/${author.id}`}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        );
    };

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                        <tbody>
                        { this.props.authors.map(this.createAuthorRow) }
                        </tbody>
                </table>
            </div>
        );
    }

}

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};

module.exports = AuthorList;