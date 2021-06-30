import "./App.css";
import SignUp from "./components/Authentification/SignUp";
import SignIn from "./components/Authentification/SignIn";
import Events from "./components/Events/Events";
import Principal from "./components/Pages/Principal";
import NavBar from "./components/NavigationBar/NavBar";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <NavBar />
          <main>
            <Switch>
              <Redirect from="/" to="/Home" exact />
              <Route path="/Home" component={Principal} />
              <Route path="/Authentification/SignUp" component={SignUp} />
              <Route path="/Authentification/SignIn" component={SignIn} />
              <Route path="/Events" component={Events} />
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
