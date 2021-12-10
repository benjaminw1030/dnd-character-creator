import React from "react";
import Login from "./Login";
import CharacterControl from "./CharacterControl"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <CharacterControl />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
