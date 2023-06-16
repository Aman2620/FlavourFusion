import React from 'react'
import './vibe.css'
import gridImage1 from '../images/grid-image-1.png'
import gridImage2 from '../images/grid-image-2.png'
import gridImage3 from '../images/grid-image-3.png'
import gridImage4 from '../images/grid-image-4.png'

function Vibe() {
  
  return (
    <div className='vibe-container'>
      <h1 style={{color:"white" ,padding:"20px",marginLeft:'auto',marginRight:'auto'}}>Ambience</h1>
        <div className="display--grid">
            <img src={gridImage1} alt="" className="four" />
            <img src={gridImage4} alt="" className="five" />
            <img src={gridImage3} alt="" className="six" />
            <img src={gridImage2} alt="" className="seven" />
        </div>

    </div>
  )
}

export default Vibe
