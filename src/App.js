import React from 'react';
import './App.css';
import MainVideo from "./MainVideo";
import RecordContainer from "./RecordContainer/RecordContainer.js";

function App() {
  return (
    <div className="App">
      {/* <MainVideo className="video" /> */}
      <RecordContainer className="record-container"/>
    </div>
  );
}

export default App;
