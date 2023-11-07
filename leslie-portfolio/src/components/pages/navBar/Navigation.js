import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/resume" className="nav-link">
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="about" className="nav-link">
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      );
    }

export default Navigation;