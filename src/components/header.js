import * as React from "react"
import { Link } from "gatsby"
import karabalogo from "../assets/icons/KarabaFC-logo-white-light.png";
import singleCover from "../assets/images/aprildancer-artwork.jpeg";
import dede from "../assets/svg/down-arrow.svg";
import scrollTo from 'gatsby-plugin-smoothscroll';
import "../styles/base.scss"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <img className="logo" src={karabalogo} alt=""></img>
    <a href="https://distrokid.com/hyperfollow/karabafc/april-dancer"><img src={singleCover} alt=""/></a>
  <h1>NEW EP OUT!</h1>
  <div className="scrollto" onClick={() => scrollTo('.main-content')} > </div>
  </header>
)

export default Header

