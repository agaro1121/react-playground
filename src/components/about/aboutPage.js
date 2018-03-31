'use strict';

const React = require('react');

const technologies = [
    'React',
    'React Router',
    'Flux',
    'Node',
    'Gulp',
    'Browserify',
    'Bootstrap'
];

const About = ( props ) => {
  return(
      <div>
          <h1>About</h1>
          <p>
              This application uses the following technologies:
              <ul>
                  { technologies.map(tech => <li key={tech}>{tech}</li>) }
              </ul>
          </p>
      </div>
  )
};

module.exports = About;