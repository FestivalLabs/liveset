import React from 'react';
import logo from './logo.svg';
import './TeamVideo.css';

function TeamVideo() {
  return (
    <div className="teamVideo">
      <header className="teamVideo-header">
        <img src={logo} className="teamVideo-logo" alt="logo" />
        <p>
          Edit <code>src/teamVideo.js</code> and save to reload.
        </p>
        <a
          className="teamVideo-link"
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

export default TeamVideo;
