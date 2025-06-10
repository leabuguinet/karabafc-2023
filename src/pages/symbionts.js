import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/base.scss"
import "../styles/tour.scss"




const Symbionts = ({ location }) => {
  const pageUrl = location.pathname;

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
    event.target.classList.toggle('opened');
  };

  

  return (
    <>
      <Layout pageUrl={pageUrl}>
      
      <div className='main-content tour'>
        <h1>Nouvel album</h1>
  


        

      </div>
    </Layout>
    </>
  )


  }

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Dates de concert" description="Prochaines dates de concert de KARABA F.C." />

export default Symbionts