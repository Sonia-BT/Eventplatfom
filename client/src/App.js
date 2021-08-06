import "./App.css";
import SignUp from "./components/Authentification/SignUp";
import SignIn from "./components/Authentification/SignIn";
import EventsList from "./components/Pages/EventsList";
import Principal from "./components/Pages/Principal";
import EventDetails from "./components/Pages/EventDetail";
import NavBar from "./components/NavigationBar/NavBar";
import ContactUs from "./components/Pages/ContactUs";
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
          <body>
            <header>
              <NavBar />
            </header>
            <main>
              <Switch>
                <Redirect from="/" to="/Home" exact />
                <Route path="/Home" component={Principal} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/Events" component={EventsList} />
                <Route path="/EventDetails" component={EventDetails} />
                <Route path="/CreateEvent" component={CreateEvent} />
              </Switch>
            </main>
            <footer>
              <ContactUs />
            </footer>
          </body>
          {/* <CreateEvent /> */}
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
