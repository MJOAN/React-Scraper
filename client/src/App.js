import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Results from "./pages/Results";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/articles" component={Results} />
        <Route exact path="/articles/:id" component={Results} />
      </Switch>
    </div>
  </Router>;

export default App;