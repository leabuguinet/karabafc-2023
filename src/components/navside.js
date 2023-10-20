import * as React from "react"
import { Link } from "gatsby"
import karabalogo from "../assets/icons/KarabaFC-logo-white-light.png";
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/navside.scss"


import { AnchorLink } from "gatsby-plugin-anchor-links";


const NavSide = ({ siteTitle, location }) => (
  <>
  <div className="nav-container">
      
      <a href="https://karabafc.com" className="logo"><img src={karabalogo} alt='KARABA FC' /></a>
      
      <div className="navbar">

        <Link activeClassName="active" to="/tour">TOUR</Link>
        <Link activeClassName="active" to="/musique">MUSIQUE</Link>
        <Link activeClassName="active" to="/merch">MERCH</Link>
        <Link activeClassName="active" to="/booking">BOOKING</Link>

      </div>

      

    </div>
  </>
)

export default NavSide
