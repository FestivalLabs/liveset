import React from 'react';
import logo from './logo.svg';
import './mainVideo.css';

function mainVideo() {
  return (
    <div className="mainVideo">
      <header className="mainVideo-header">
        <img src={logo} className="mainVideo-logo" alt="logo" />
        <p>
          Edit <code>src/mainVideo.js</code> and save to reload.
        </p>
        <a
          className="mainVideo-link"
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

export default mainVideo;
