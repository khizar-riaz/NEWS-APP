import PropTypes from 'prop-types'     //shortcut rcep
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {}

  render() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <div class="container-fluid">
        <NavLink className="navbar-brand" exact to="/">
        NewsAppUsingAPI
        </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/general">
                General
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/business">
                Business
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/entertainment">
                Entertainment
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/health">
                Health
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/science">
                Science
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/sports">
                Sports
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/technology">
                Technology
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar