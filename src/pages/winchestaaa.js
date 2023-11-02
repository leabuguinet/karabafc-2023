import * as React from "react"
import Layout from "../components/layout"
import "../styles/base.scss"
import bonusFile from "../assets/images/bonus.zip"

const Bonus = ({ location }) => {
  const pageUrl = location.pathname
  
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
