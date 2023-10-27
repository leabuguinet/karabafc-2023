import React from 'react';
//import * as Scroll from 'react-scroll';
import { Link } from "gatsby"
import karabalogo from '../assets/icons/KarabaFC-logo-white-light.png';
import "../styles/base.scss"
import "../styles/navburger.scss"

export default function NavBurger() {

  const openBurgerMenu = event => {
    event.currentTarget.classList.toggle('openMenu-arrow');

    let NavBarContainer = document.querySelector('.navburger');
    if(NavBarContainer){
      NavBarContainer.classList.toggle('openMenu');
    }

    let mainContent = document.querySelector('main');
    if(mainContent){
      mainContent.classList.toggle('no-scroll');
    }
  
  };

  return (
    <>
    
    <span onClick={openBurgerMenu} className='navburger-button'></span>
    <nav className="navburger">
      
      <div className="navbar">
        <img className="logo" src={karabalogo} alt='' />
        <Link  to="/tour">TOUR</Link>
        <Link  to="/musique">MUSIQUE</Link>
        <Link  to="/merch">MERCH</Link>
        <Link  to="/booking">BOOKING</Link>

      </div>

    </nav>
    </>
  )
}