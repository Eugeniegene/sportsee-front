import React from "react"
import { NavLink, Link } from "react-router-dom"

import "./header.css"

import SportSeelogo from "../../assets/sportsee-logo.png"

/**
 * This function will render the header.
 * No link is usable. Clicking on one of the links will not change the page.
 * @component
 */

const Header = () => {
    return (
      <header>
        <Link to="/">
          <img className="SportseeLogo" src={SportSeelogo} alt="SportSee_logo" />
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                className="Homepage" exact to="/user/:userId">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Profil" to="/user/:userId">
                Profil
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Settings" to="/user/:userId">
                Réglages
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Community" to="/user/:userId">
                Communauté
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
export default Header