import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/LOGO-DIR EVENT-SANS FLEURES-AVEC FOND 2.png";

function NavBar() {
  return (
    <div>
      <header className="MainNavigation">
        <div className="NavigationLogo">
          <a href="/">
            <img className="Logo" src={Logo} alt="DirEvent_Logo" />
            {/* <div className="Title_Logo"> */}
            {/* <h3 className="Title1">DIR</h3>
              <h3 className="Title2">Event</h3> */}
            {/* </div> */}
          </a>
        </div>
        <nav className="NavigationBar">
          <ul>
            <li>
              <NavLink to="/Home" href="/">
                Home <i className="fas fa-home"></i>
              </NavLink>
            </li>
            <li style={{ zIndex: 99 }}>
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
                Event <i className="fas fa-plus"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
