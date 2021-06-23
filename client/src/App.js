import "./App.css";
import Authentification from "./components/Pages/Authentification";
import Events from "./components/Pages/Events";
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
              <Route path="/Authentification" component={Authentification} />
              <Route path="/Events" component={Events} />
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
