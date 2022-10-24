import React from "react"
import { NavLink, Link } from "react-router-dom"

import "./header.css"

import SportSeelogo from "../../assets/sportsee-logo.png"

const Header = () => {
      return (
      <header>
        <Link to="/">
          <img className="SportseeLogo" src={SportSeelogo} alt="SportSee's logo" />
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                className="Homepage"
                exact
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Profil"
                to="/">
                Profil
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Settings"
                to="/">
                Réglages
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Community"
                to="/">
                Communauté
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      )
    }
  
  export default Header