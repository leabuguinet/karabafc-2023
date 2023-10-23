import React, { useState } from 'react'
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion";
import Header from '../components/header';
import NavBurger from '../components/navburger';
import NavSide from '../components/navside';
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/base.scss"
import "../styles/tour.scss"

import dataDates from '../assets/data/data-dates.json'
import EventCard from '../components/EventCard'


let currentYear = new Date().getFullYear().toString();
let currentMonth = (new Date().getMonth() + 1).toString();
let currentDay = new Date().getDate().toString();
let passedGig = [];
let nextGig = [];

// eslint-disable-next-line no-lone-blocks
{ dataDates.map( (data) => {
  let gigYear = data.year.toString();
  let gigMonth = parseInt(data.month.toString(), 10);
  let gigDay = parseInt(data.day.toString(), 10);

  if(gigYear === currentYear){

    if(gigMonth > currentMonth){

      return nextGig.push(data);
    } 
    
    if (gigMonth == currentMonth){

      if(gigDay >= currentDay){

        return nextGig.push(data);
      }
      return passedGig.push(data);
    }

  } else if (gigYear > currentYear){

      return nextGig.push(data);
  }

  return passedGig.push(data);
  })
}

passedGig.reverse();



const pageVariants = {
  initial: {
    opacity: 0,
    y: 0,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "-0vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.8
};

const Tour = ({ location }) => {
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
        <h1>Prochaines dates</h1>

        <div className='nextgigs-list'>
          { nextGig.map( (data) => {
      
            return <EventCard data={data} key={data.id}/>

            })
          }
        </div>

        <h2 className="previousGigs"><span>Dates précédentes</span> <button onClick={(handleClick)} /></h2>

        {isShown && (
          <div className='previousgigs-list'>
            { passedGig.map((data) => {

              return <EventCard data={data} key={data.id}/>
              })
            }
          </div>
        )}

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

export default Tour