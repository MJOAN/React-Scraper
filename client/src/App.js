import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/articles" component={Main} />
        <Route exact path="/articles/:id" component={Saved} />
      </Switch>
    </div>
  </Router>;

export default App;
