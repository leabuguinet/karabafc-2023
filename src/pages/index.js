import React from 'react'
import { Link } from "gatsby"
import { motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"

import karabalogo from "../assets/icons/KarabaFC-logo-white-light.png";
import singleCover from "../assets/images/aprildancer-artwork.jpeg";

import "../styles/base.scss"
import "../styles/header.scss"

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
        <a aria-label="Lien vers l'EP" className="ep-link"href="https://distrokid.com/hyperfollow/karabafc/april-dancer"><img src={singleCover} alt=""/></a>
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