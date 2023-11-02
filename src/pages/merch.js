import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import KarabaK7 from "../assets/images/Karaba-F.C-k7.jpeg"
import KarabaVinyl from "../assets/images/vinyl-aprildancer-karabafc.jpeg"
import KarabaTshirt from "../assets/images/Karaba-F.C-tshirt2.png"

import "../styles/base.scss"
import "../styles/merch.scss"

const Merch = ({ location }) => {
  const pageUrl = location.pathname

  return (
    <Layout pageUrl={pageUrl}>
      <div className="main-content merch">
        <h1>Merch</h1>

        <div className="merchandise-list">

        <div className="merchandise-item">
            <div className="merchandise-img">
              <img src={KarabaVinyl} alt="Vinyle April Dancer de Karaba-F.C" />
            </div>
            <div className="merchandise-description">
              <h2>Vinyle April Dancer</h2>
              <p>1er pressage</p>
              <p>Édition Limitée</p>
              <p><a
                className="underline"
                href="https://aladeriverecords.bandcamp.com/album/d-rive-6-april-dancer-par-karaba-f-c"
              >
                Acheter via À La Dérive Records (FR)
              </a>
              </p>
              <p>

              <a
                className="underline"
                href="https://ripcordrecords.bandcamp.com/album/april-dancer"
              >
                Buy via Ripcord Records (UK)
              </a>
              </p> 
              <p>
              <a
                className="underline"
                href="https://www.clevereagle.com/collections/clever-eagle-vinyl/products/karaba-fc-april-dancer-ep-vinyl"
              >
                Buy via Clever Eagle (US)
              </a>
              </p>
            </div>
          </div>


        <div className="merchandise-item">
            <div className="merchandise-img">
              <img
                src={KarabaTshirt}
                alt="Tshirt April Dancer"
              />
            </div>
            <div className="merchandise-description">
              <h2>April Dancer t-shirt</h2>
              <p>Earth Positive - Climate neutral</p>
              <p>Disponible en concert !</p>
            </div>
          </div>

          <div className="merchandise-item">
            <div className="merchandise-img">
              <img src={KarabaK7} alt="K7 de Empty Rooms du groupe Karaba-F.C" />
            </div>
            <div className="merchandise-description">
              <h2>Empty Rooms K7</h2>
              <p>2ème édition, orange transparent, 30 copies</p>
              <p>Édition Limitée</p>
              <p>
                Comprend l’écoute en continu illimitée de Empty Rooms au moyen
                de l’appli gratuite de Bandcamp, ainsi que le téléchargement de
                haute qualité aux formats MP3, FLAC et plus.
              </p>
              <a
                className="underline"
                href="https://karabafc.bandcamp.com/album/empty-rooms"
              >
                Acheter via BandCamp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Merch" description="KARABA F.C. Merch - Vinyle, k7, tshirts" />
export default Merch
