import * as React from "react"
import KarabaFCGig from "../assets/images/Karaba-F.C-gig2.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/base.scss"
import "../styles/booking.scss"

const Booking = ({ location }) => {
  const pageUrl = location.pathname

  return (
    <Layout pageUrl={pageUrl}>
      <div className="main-content musique">
        <h1 name="up" id="test">
          Booking
        </h1>

        <div className="booking-content">
          <div>
            <img src={KarabaFCGig} alt="Karaba F.C band"></img>
            <span>©19lapins</span>
          </div>
          <a href="mailto:feticheprodfrance@gmail.com">
            feticheprodfrance@gmail.com
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Booking" description="KARABA F.C. Book us - Contactez-nous" />

export default Booking
