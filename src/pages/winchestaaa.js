import * as React from "react"
import Layout from "../components/layout"
import "../styles/base.scss"

import bonusFile from "../assets/images/bonus.zip"


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

const Bonus = ({ location }) => {
  const pageUrl = location.pathname


/*   const data = useStaticQuery(graphql`
  {
    allFile(filter: { extension: { eq: "zip" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`) */
  
  return (
    <Layout pageUrl={pageUrl}>
      <div className="main-content bonus">
        <h1>
          Bonus
        </h1>

      
      <h2>Merci pour votre soutien ♡</h2>
   

      <a href={bonusFile} download={bonusFile}>Télécharger</a>

    </div>

    </Layout>
  )
}

export default Bonus
