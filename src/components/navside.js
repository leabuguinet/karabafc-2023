import * as React from "react"
import { Link } from "gatsby"
import karabalogo from "../assets/icons/KarabaFC-logo-white-light.png";
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/navside.scss"


import { AnchorLink } from "gatsby-plugin-anchor-links";


const NavSide = ({ siteTitle }) => (
  <>
  <div className="nav-container">
      
      <a href="https://karabafc.com" className="logo"><img src={karabalogo} alt='KARABA FC' /></a>
      
      <div className="navbar">
      <AnchorLink to="/#ttt" title="Our team">
        TOUR
      </AnchorLink>
      <AnchorLink to="/musique#tst" title="Our team">
        MUSIQUE
      </AnchorLink>
      <AnchorLink to="/merch#testt" title="Our team">
        MERCH
      </AnchorLink>
      <AnchorLink to="/booking#test" title="Our team">
        BOOKING
      </AnchorLink>


        {/* <Link activeClassName="active" to="/">TOUR</Link> */}
        {/* <Link activeClassName="active" to="/musique">MUSIQUE</Link> */}
        {/* <Link activeClassName="active" to="/merch">MERCH</Link> */}
        {/* <Link onClick={() => scrollTo('#test')} activeClassName="active" to="/booking#test">BOOKING</Link> */}

      </div>

      

    </div>
  </>
)

export default NavSide
