/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { motion } from "framer-motion"

import "./layout.scss"
import "../styles/base.scss"

import Footer from "./footer"
import NavSide from "./navside"
import NavBurger from "./navburger"

const Layout = ({ children, pageUrl }) => {

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
