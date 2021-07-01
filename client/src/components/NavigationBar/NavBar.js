import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <header className="MainNavigation">
      <div className="NavigationLogo">
        <h1>EventPlatform</h1>
      </div>
      <nav className="NavigationBar">
        <ul>
          <li>
            <NavLink to="/Home">
              Home <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li>
            Connect <i className="fas fa-user"></i>
            <ul className="Sub_Auth">
              <NavLink to="/Authentification/SignIn">
                <li>Sign In</li>
              </NavLink>
              <NavLink to="/Authentification/SignUp">
                <li>Sign Up</li>
              </NavLink>
            </ul>
          </li>
          <li>
            <NavLink to="/Events">
              Events <i className="far fa-calendar-alt"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">
              Contact Us <i className="fas fa-phone"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
