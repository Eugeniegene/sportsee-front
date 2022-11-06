import React from "react"
import { Link } from "react-router-dom"

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
        <figure>
          <img className="SportseeLogo" src={SportSeelogo} alt="SportSee_logo" />
        </figure>
        <nav className="main-nav">
          <ul>
            <li>
              <Link
                className="Homepage" to="/user/:userId">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="Profil" to="/user/:userId">
                Profil
              </Link>
            </li>
            <li>
              <Link
                className="Settings" to="/user/:userId">
                Réglages
              </Link>
            </li>
            <li>
              <Link
                className="Community" to="/user/:userId">
                Communauté
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
export default Header