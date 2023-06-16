import React from 'react'
import './about.css'

function About(props) {
  return (
    <>
    <div className='about-container-full'>
      <div className="about-container">
      <div className='main-about'>
        <h1>{props.about}</h1>
        <p>{props.culinary}</p>
      </div>
      <div className='description-about'>
        <p>{props.description}</p>
      </div>
      </div>
      <div className='about-horizontal'></div>
    </div>
    </>
  )
}

export default About
