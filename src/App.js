import React from 'react';
import './App.css';
import Chat from "./Chat";
import MainVideo from "./MainVideo";
import TeamVideo from "./TeamVideo";
import Master from "./Master";
import Timeline from "./Timeline";


function App() {
  return (
    <>
    <div class = "container">
      <Chat />
      <MainVideo />
      <TeamVideo />
      <Master />
      <Timeline />
    </div>
    </>
  )
}

export default App;
