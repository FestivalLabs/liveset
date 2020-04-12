import React from 'react';
import logo from './logo.svg';
import './timeline.css';

function timeline() {
  return (
    <div className="timeline">
      <header className="timeline-header">
        <img src={logo} className="timeline-logo" alt="logo" />
        <p>
          Edit <code>src/timeline.js</code> and save to reload.
        </p>
        <a
          className="timeline-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default timeline;
