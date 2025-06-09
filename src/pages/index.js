import React, { useEffect } from 'react'
import Helmet from "react-helmet"

import { Link } from "gatsby"
import { motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"

import karabalogo from "../assets/icons/KarabaFC-logo-white-light.png";
import karabalogo2025 from "../assets/icons/Karaba-Logo-2025-Transparent.png";
import singleCover from "../assets/images/aprildancer-artwork.jpeg";

import "../styles/base.scss"
import "../styles/header.scss"

const Index = ({ location }) => {

  const pageUrl = location.pathname;

  useEffect(() => {
    if (typeof window !== "undefined" && window.FinisherHeader) {
      new window.FinisherHeader({
        "count": 7,
  "size": {
    "min": 562,
    "max": 1188,
    "pulse": 2
  },
  "speed": {
    "x": {
      "min": 0.6,
      "max": 3
    },
    "y": {
      "min": 0.6,
      "max": 3
    }
  },
  "colors": {
    "background": "#ffffff",
    "particles": [
      "#4d5431",
      "#367485",
      "#ecc752",
      "#debbb5",
      "#714782",
      "#392766",
          "#4d5431",
    ]
  },
  "blending": "none",
  "opacity": {
    "center": 0.9,
    "edge": 0
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
      });
    }
  }, []);



  return (
    <>

      <Layout pageUrl={pageUrl}>

      <motion.header
      
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 4000
      }}>
        
        {/* <img className="logo" src={karabalogo} alt=""></img> */}
        {/* 
        <a aria-label="Lien vers l'EP" className="ep-link"href="https://distrokid.com/hyperfollow/karabafc/april-dancer"><img src={singleCover} alt=""/></a>
        <h1>NEW EP OUT!</h1> */}

        {/* <div className="home-video">
          <iframe
            src="https://www.youtube.com/embed/Z0992lzbbXU?si=q-KIr548bjMu8cup"
            title="videoTitle"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
        <h1>NEW LIVE SESSION</h1>
 */}




   <div className="header finisher-header logo-mask" >
    Logo, navigation, etc.
  </div>



        <Link to="/tour" state={{modal: true}}><div className="scrollto" > </div></Link>


      </motion.header>
      </Layout>

    </>
  )

  }

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Accueil" description="Indie / Post-hardcore / 90s Emo entre Paris et Brest - NEW EP APRIL DANCER OUT" />

export default Index