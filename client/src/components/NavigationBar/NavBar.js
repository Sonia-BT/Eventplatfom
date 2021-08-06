import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header className="MainNavigation">
        <div className="NavigationLogo">
          <a href="/">
            <h1>DIREvent</h1>
          </a>
        </div>
        <nav className="NavigationBar">
          <ul>
            <li>
              <NavLink to="/Home" href="/">
                Home <i className="fas fa-home"></i>
              </NavLink>
            </li>
            <li>
              Connect <i className="fas fa-user"></i>
              <ul className="Sub_Auth">
                <NavLink to="/SignIn">
                  <li>Sign In</li>
                </NavLink>
                <NavLink to="/SignUp">
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
              <NavLink to="/CreateEvent">
                Event <i class="fas fa-plus"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
