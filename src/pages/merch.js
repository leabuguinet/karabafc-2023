import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import KarabaK7 from "../assets/images/Karaba-F.C-k7.jpeg";
import KarabaTshirt from "../assets/images/Karaba-F.C-tshirt.jpeg";


import "../styles/base.scss"
import "../styles/merch.scss"

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
};


const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.8,
};

const Merch = () => {
  return (
    <Layout>
    <motion.div 
    className="main-content merch"
      key="2"
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 name="up" id="testt">Merch</h1>

      <div className="merchandise-list">
        <div className="merchandise-item">
          <div className="merchandise-img">
            <img src={KarabaK7} alt="K7 de Empty Rooms du goupe Karaba-F.C" />
          </div>
          <div className="merchandise-description">
            <h2>Empty Rooms K7</h2>
            <p>2ème édition, orange transparent, 30 copies</p>
            <p>Édition Limitée</p>
            <p>
              Comprend l’écoute en continu illimitée de Empty Rooms au moyen de
              l’appli gratuite de Bandcamp, ainsi que le téléchargement de haute
              qualité aux formats MP3, FLAC et plus.
            </p>
            <a
              className="underline"
              href="https://karabafc.bandcamp.com/album/empty-rooms"
            >
              Acheter via BandCamp
            </a>
          </div>
        </div>

        <div className="merchandise-item">
          <div className="merchandise-img">
            <img
              src={KarabaTshirt}
              alt="K7 de Empty Rooms du goupe Karaba-F.C"
            />
          </div>
          <div className="merchandise-description">
            <h2>Empty Rooms t-shirt</h2>
            <p>Stanley/Stella organic cotton</p>
            <a
              className="underline"
              href="https://karabafc.bandcamp.com/album/empty-rooms"
            >
              Acheter via BandCamp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
    </Layout>
  );
};

export default Merch;
