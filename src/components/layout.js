/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import Header from "./header"
import "./layout.scss"
import "../styles/base.scss"

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

const Layout = ({ children }) => {

  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  

  return (
    <>
    
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <AnimatePresence mode="wait">
        <motion.main
                //key={location.pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit">
        <NavSide />
        <NavBurger />
        
          {children}
        </motion.main>

        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gddatsby</a>
        </footer>
        </AnimatePresence>
    </>
  )
}

export default Layout
