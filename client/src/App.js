import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/view/Landing/Landing";
import Login from "./components/view/Login/Login";
import Register from "./components/view/Register/Register";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <ul></ul>
        <Switch>
          <Route exact path="/" component={Auth(Landing, null)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/register" component={Auth(Register, false)} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
