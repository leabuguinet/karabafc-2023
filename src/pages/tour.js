import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/base.scss"
import "../styles/tour.scss"

import dataDates from '../assets/data/data-dates.json'
import EventCard from '../components/eventcard'
import NoEventcard from '../components/noeventcard'


let currentYear = new Date().getFullYear().toString();
let currentMonth = (new Date().getMonth() + 1).toString();
let currentDay = new Date().getDate().toString();
let archived = [];
let nextGig = [];


{ dataDates.map( (data) => {
  let gigYear = data.year.toString();
  let gigMonth = parseInt(data.month, 10).toString();
  let gigDay = parseInt(data.day, 10).toString();

  if(gigYear === currentYear){

    if(gigMonth < currentMonth){

      return archived.push(data);

    } else {

      

      return nextGig.push(data);


    }
   

  } else if (gigYear > currentYear){

      return nextGig.push(data);
  }

  return archived.push(data);
  })
}

archived.reverse();

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}



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

          {nextGig.length === 0 ? <NoEventcard /> : null}

          { nextGig.map( (data) => {
      
            return <EventCard data={data} key={data.id}/>

            })
          }
        </div>

        <h2 className="previousgigs"><span>Dates précédentes</span> <button aria-label="Afficher les concerts précédents" onClick={(handleClick)} /></h2>


        <AnimatePresence>
        {isShown && (
          <motion.div className='previousgigs-list'
          key="1"
          variants={container}
          initial="hidden"
          animate="show">
            { archived.map((data) => {

              return <EventCard data={data} key={data.id} variants={item}/>
              })
            }
          </motion.div>
        )}
        </AnimatePresence>

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