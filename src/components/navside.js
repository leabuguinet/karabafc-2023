import React, { useEffect } from "react"
import { Link } from "gatsby"
import karabalogo from "../assets/icons/Karaba_FontLogo2K25_white.png"

import "../styles/navside.scss"

const NavSide = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.FinisherHeader) {
      new window.FinisherHeader({
        count: 7,
        size: {
          min: 200,
          max: 300,
          pulse: 2,
        },
        speed: {
          x: {
            min: 1,
            max: 2,
          },
          y: {
            min: 1,
            max: 2,
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
      <div className="nav-container">
        {/*         <a href="https://karabafc.com" className="logo">
          <img src={karabalogo} alt="KARABA FC" />
        </a> */}
        <a href="https://karabafc.com" className="logo">
          {" "}
          <div className="header finisher-header logo-mask"></div>{" "}
        </a>
        <div className="navbar">
          <Link activeClassName="active" to="/symbionts">
            symbionts
          </Link>
          <Link activeClassName="active" to="/tour">
            tour
          </Link>
          <Link activeClassName="active" to="/musique">
            musique
          </Link>
          <Link activeClassName="active" to="/merch">
            merch
          </Link>
          <Link activeClassName="active" to="/booking">
            booking
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavSide
