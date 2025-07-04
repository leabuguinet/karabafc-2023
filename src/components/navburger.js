import React, { useEffect } from "react"
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

  useEffect(() => {

  
      if (typeof window !== "undefined" && window.FinisherHeader) {

        let minSize = 300
      let maxSize = 700


      const width = window.innerWidth
      if (width > 1200) {
        minSize = 562
        maxSize = 1188
      } else if (width < 1200) {
        minSize = 200
        maxSize = 300
      }


        new window.FinisherHeader({
          className: "finisher-header-2",
          count: 7,
          size: {
            min: minSize,
            max: maxSize,
            pulse: 2,
          },
          speed: {
            x: {
              min: 0.5,
              max: 2,
            },
            y: {
              min: 0.6,
              max: 3,
            },
          },
          colors: {
            background: "#ffffff",
            particles: [
              "#4d5431",
              "#367485",
              "#ecc752",
              "#debbb5",
              "#714782",
              "#392766",
              "#4d5431",
            ],
          },
          blending: "none",
          opacity: {
            center: 0.9,
            edge: 0,
          },
          skew: 0,
          shapes: ["c"],
        })
      }
    }, [])

  return (
    <>
    
    <span onClick={openBurgerMenu} className='navburger-button'></span>
    <nav className="navburger">
      
      <div className="navbar">
        <div className="header finisher-header-2 logo-mask"></div>
        <Link  to="/tour">TOUR</Link>
        <Link  to="/musique">MUSIQUE</Link>
        <Link  to="/merch">MERCH</Link>
        <Link  to="/booking">BOOKING</Link>

      </div>

    </nav>
    </>
  )
}