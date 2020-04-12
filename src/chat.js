import React from 'react';
import logo from './logo.svg';
import './Chat.css';

function Chat() {
  return (
    <div className="chat">
      <header className="chat-header">
        <img src={logo} className="chat-logo" alt="logo" />
        <p>
          Edit <code>src/chat.js</code> and save to reload.
        </p>
        <a
          className="chat-link"
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

export default Chat;
