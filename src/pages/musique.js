import React from "react"
import { useRef, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NavBurger from "../components/navburger"
import NavSide from "../components/navside"
//import YoutubeEmbed from './YoutubeEmbed'
import { AnimatePresence, motion } from "framer-motion"
import "../styles/base.scss"
import "../styles/musique.scss"

//import arrowDown from '../assets/icons/down-arrow.svg'

import AmIcon from "../assets/svg/icon-applemusic.inline.svg"
import BcIcon from "../assets/svg/icon-bandcamp.inline.svg"
import SpoIcon from "../assets/svg/icon-spotify.inline.svg"
import DeeIcon from "../assets/svg/icon-deezer.inline.svg"
import ExtLink from "../assets/svg/external-link.inline.svg"

import emptyRooms from "../assets/images/Karaba-F.C-Empty-Rooms_Cover_Discogs.jpg"
import aprilDancer from "../assets/images/aprildancer-artwork.jpeg"

const KarabaClipUrl = "https://youtu.be/zPwLwzbASlk"

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

const Music = ({ location }) => {
  //ALBUM HOVER
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = event => {
      element.classList.toggle("active")
      element.classList.toggle("closed")
    }

    const element = ref.current

    element.addEventListener("click", handleClick)

    return () => {
      element.removeEventListener("click", handleClick)
    }
  }, [])

  const ref2 = useRef(null)

  useEffect(() => {
    const handleClick = event => {
      element.classList.toggle("active")
      element.classList.toggle("closed")
    }

    const element = ref2.current

    element.addEventListener("click", handleClick)

    return () => {
      element.removeEventListener("click", handleClick)
    }
  }, [])

  const pageUrl = location.pathname

  return (
    <Layout pageUrl={pageUrl}>
      <div className="main-content musique">
        <h1>
          Musique
        </h1>

        <h2>EP</h2>

        <div className="album-list">
          <div className="album">
            <img alt="" src={aprilDancer} />

            <div className="album-info closed" ref={ref2}>
              <h3>APRIL DANCER</h3>

              <div>
                <p>
                  <span>Enregistrement, mixage et mastering : </span>Serge
                  Morattel
                </p>
                <p>
                  <span>Musique et textes : </span>KARABA F.C.
                </p>
                <p></p>
                <p>
                  <a
                    className="buybutton"
                    href="https://karabafc.bandcamp.com/album/april-dancer"
                  >
                    Acheter <ExtLink />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="album">
            <img alt="" src={emptyRooms} />

            <div className="album-info closed" ref={ref}>
              <h3>EMPTY ROOMS</h3>

              <div>
                <p>
                  <span>Enregistrement :</span> Studio Firgun, Charles de
                  Montalembert, Tom Fonty
                </p>
                <p>
                  <span>Mixage : </span>Charles de Montalembert
                </p>
                <p>
                  <span>Masterisé par : </span>Serge Morattel à Rec Studio
                </p>
                <p>
                  <span>Musique et textes : </span>KARABA F.C.
                </p>
                <p></p>
                <p>
                  <a
                    className="buybutton"
                    href="https://karabafc.bandcamp.com/album/empty-rooms"
                  >
                    Acheter <ExtLink />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="icons">
          <a href="https://open.spotify.com/album/5iB0BwdGPSTp2HwSPpp3YD">
            <SpoIcon />
          </a>
          <a href="https://music.apple.com/fr/album/empty-rooms-ep/1594184709?uo=4">
            <AmIcon />
          </a>
          <a href="https://karabafc.bandcamp.com/album/empty-rooms">
            <BcIcon />
          </a>
          <a href="https://www.deezer.com/fr/album/271193162">
            <DeeIcon />
          </a>
        </div>

        <h2>Vidéos</h2>

        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/zPwLwzbASlk?si=-S3sOQroODyNcPb7"
            title="videoTitle"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Musique" description="KARABA F.C. Écoutez April Dancer, Empty Rooms - Vidéos disponibles" />

export default Music
