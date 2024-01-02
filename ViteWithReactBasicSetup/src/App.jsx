import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
