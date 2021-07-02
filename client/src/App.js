import "./App.css";
import SignUp from "./components/Authentification/SignUp";
import SignIn from "./components/Authentification/SignIn";
import EventsList from "./components/Pages/EventsList";
import Principal from "./components/Pages/Principal";
import NavBar from "./components/NavigationBar/NavBar";
import CreateEvent from "./components/UserPages/CreateEvent";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
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
              <Route path="/Events" component={EventsList} />
            </Switch>
          </main>
          <CreateEvent />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
