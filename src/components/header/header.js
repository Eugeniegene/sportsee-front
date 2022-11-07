import React from "react"

import "./header.css"

import SportSeelogo from "../../assets/sportsee-logo.png"

/**
 * This function will render the header.
 * No link is usable. Clicking on one of the options will not change the page.
 * @component used in index.js
 */

const Header = () => {
    return (
      <header>
        <figure>
          <img className="SportseeLogo" src={SportSeelogo} alt="SportSee_logo" />
        </figure>
        <nav className="main-nav">
          <ul>
            <li              
                className="Homepage">
                Accueil
            </li>
            <li
                className="Profil">
                Profil
            </li>
            <li
                className="Settings" >
                Réglages
            </li>
            <li
                className="Community">
                Communauté
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
export default Header