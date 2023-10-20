import React, { useState } from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout"
import Header from '../components/header';
import Seo from "../components/seo"
import scrollTo from 'gatsby-plugin-smoothscroll';


import karabalogo from "../assets/icons/KarabaFC-logo-white-light.png";
import singleCover from "../assets/images/aprildancer-artwork.jpeg";

import "../styles/base.scss"
import "../styles/header.scss"



const pageVariants = {
  initial: {
    opacity: 0,
    y: 0,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "-0vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 3
};

const Index = ({ location }) => {

  const pageUrl = location.pathname;

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

        <img className="logo" src={karabalogo} alt=""></img>
        <a className="ep-link"href="https://distrokid.com/hyperfollow/karabafc/april-dancer"><img src={singleCover} alt=""/></a>
        <h1>NEW EP OUT!</h1>
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
export const Head = () => <Seo title="Home" />

export default Index