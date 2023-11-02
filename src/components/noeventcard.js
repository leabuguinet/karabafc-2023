import React from 'react'

import "../styles/base.scss"
import "../styles/eventcard.scss"

const NoEventcard = () => {

  return (

    <>
      <div className='eventcard'>

        <div className='eventdescription' style={{textAlign: 'center', width: '100%', margin: "0"}}>
            <span >Stay tuned...</span>
        </div>
      </div>
    </>
  )
}

export default NoEventcard