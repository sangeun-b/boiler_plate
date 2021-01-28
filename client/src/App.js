import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/view/Landing/Landing";
import Login from "./components/view/Login/Login";
import Register from "./components/view/Register/Register";

function App() {
  return (
    <Router>
      <div>
        <ul></ul>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
