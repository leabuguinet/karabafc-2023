import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/base.scss"
import "../styles/symbionts.scss"




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
      
      <div className='main-content' id="symbionts">
        <h1>Nouvel album</h1>
  
        <div className='symbionts-content'>

          <div className='symbionts-cover'>

          </div>

          <div className='symbionts-description'>

            <h2>SYMBIONTS</h2>
            <p>Sortie le 17 octobre 2025</p>

{/*             <a className="button-87" target="_blank" href="https://voturecords.com/product/votu083-karaba-fc-symbionts-12/">Précommandez&nbsp;le&nbsp;vinyle</a>
 */}         

          </div>

        </div>

        <h1>Nouveau single</h1>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/4G8GQkTBdTM?si=FY5-qPmDhrLm5MKs"
            title="videoTitle"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
        

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
export const Head = () => <Seo title="NOUVEL ALBUM" description="Sortie de l'album SYMBIONTS le 17 octobre 2025 - Découvrez le premier single Tides" />

export default Symbionts