/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

import Header from "./header"
import "./layout.scss"
import "../styles/base.scss"

import Footer from "./footer"
import NavSide from "./navside"
import NavBurger from "./navburger"



const duration = 0.5
const variants = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: duration },
  },
}

const Layout = ({ children, pageUrl }) => {


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


   let isIndexPage = false;

    if (pageUrl === "/"){
      isIndexPage = true;
    }

  return (
    <>
      <div className=   {isIndexPage ? "header" : "main-container"}>
        {isIndexPage ? null : <NavSide />}
        {isIndexPage ? null : <NavBurger />}


        <motion.main



          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}




          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 85,
            
          }}
        >
            {children}
            
        </motion.main>
      </div>
      
      {isIndexPage ? null : <Footer />}
       
  </>
  )
}

export default Layout
