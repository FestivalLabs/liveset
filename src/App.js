import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Lobby from "./pages/Lobby";
import Room from "./pages/Room";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/room/:roomId">
            <Room />
          </Route>
          <Route path="/">
            <Lobby />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
