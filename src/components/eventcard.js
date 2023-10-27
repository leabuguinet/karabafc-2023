import React from 'react'
//import ExtLink from '../assets/icons/external-link.svg'
import ExtLink from "../assets/svg/external-link.inline.svg";
//import { AnimatePresence, motion } from "framer-motion";


import "../styles/base.scss"
import "../styles/eventcard.scss"

const Eventcard = ({data}) => {

  return (

    <>
      <div className='eventcard'>
        <div className='eventdate'>
          <span>{data.day}/{data.month}</span>
          <span>{data.year}</span>
        </div>

        <div className='eventdescription'>
            <span>{data.city}</span><span className='point'>•</span>
            <span className="location">{data.location}</span><span className='point'>•</span>
            <span>{data.eventlink && <a href={data.eventlink}>   <ExtLink /></a>}</span> 
        </div>
      </div>
    </>
  )
}

export default Eventcard