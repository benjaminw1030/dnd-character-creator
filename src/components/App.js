import React from "react";
import Account from "./Account";
import CharacterControl from "./CharacterControl";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/">
          <CharacterControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
