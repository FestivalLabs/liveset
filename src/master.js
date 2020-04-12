import React from 'react';
import logo from './logo.svg';
import './master.css';

function master() {
  return (
    <div className="master">
      <header className="master-header">
        <img src={logo} className="master-logo" alt="logo" />
        <p>
          Edit <code>src/master.js</code> and save to reload.
        </p>
        <a
          className="master-link"
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

export default master;
