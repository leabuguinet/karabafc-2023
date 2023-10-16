import React from 'react';
//import * as Scroll from 'react-scroll';
import { Link } from "gatsby"
import karabalogo from '../assets/icons/KarabaFC-logo-white-light.png';
import "../styles/base.scss"
import "../styles/navburger.scss"

export default function NavBurger() {

  //const Element = Scroll.Element;

  const handleClick = event => {
    event.currentTarget.classList.toggle('openMenu-arrow');
    let NavBarContainer = document.querySelector('.navburger');
    NavBarContainer.classList.toggle('openMenu');
    document.body.classList.toggle('no-scroll');
  
  };

  const handleClickOnLink = event => {
    document.querySelector('navburger-button').classList.toggle('openMenu-arrow');
    let NavBarContainer = document.querySelector('.navburger');
    NavBarContainer.classList.toggle('openMenu');
    document.body.classList.toggle('no-scroll')
  
  };

  return (
    <>
    <span onClick={handleClick} className='navburger-button'></span>
    <nav className="navburger">
      
     {/*  <Element name="">
        <a href="https://karabafc.com"><Logo src={karabalogo} alt='KARABA FC' /></a>
      </Element> */}


      
      <div className="navbar">
        <img className="logo" src={karabalogo} alt='' />
        <Link onClick={handleClickOnLink} to="/">TOUR</Link>
        <Link onClick={handleClickOnLink} to="/musique">MUSIQUE</Link>
        <Link onClick={handleClickOnLink} to="/merch">MERCH</Link>
        <Link onClick={handleClickOnLink} to="/booking">BOOKING</Link>

      </div>

      

    </nav>
    </>
  )
}