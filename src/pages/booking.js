import * as React from "react"
import { motion } from "framer-motion"
import NavBurger from "../components/navburger"
import NavSide from "../components/navside"
import KarabaFCGig from "../assets/images/Karaba-F.C-gig2.jpg"
import Layout from "../components/layout"

import "../styles/base.scss"
import "../styles/booking.scss"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-0vw",
    scale: 1.2,
  },
}

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.8,
}

const Booking = ({ location }) => {
  const pageUrl = location.pathname

  return (
    <Layout pageUrl={pageUrl}>
      <div className="main-content musique">
        <h1 name="up" id="test">
          Booking
        </h1>

        <div className="booking-content">
          <div>
            <img src={KarabaFCGig} alt="Karaba F.C band"></img>
            <span>©19lapins</span>
          </div>
          <a href="mailto:feticheprodfrance@gmail.com">
            feticheprodfrance@gmail.com
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Booking
