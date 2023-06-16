import React from 'react'
import './whatson.css'
import happyHours from '../images/happy-hours.png'
import guySinging from '../images/guy-singing.png'

function Whatson() {
    function booked(){
        alert('Please Scroll Down and book your table')
      }

  return (
    <div className='whatson-container'>
        <div className='whatson-title'>
            <h1>What's On</h1>
        </div>
        <div className='whatson-main-content-right'>
            <img src={happyHours} alt="" />
            <div className='main-content-content'>
                <p className='happy-hour'><b>Happy Hour</b></p>
                <p className='cocktails'>50% on all cocktails</p>
                <p className='days'>Monday to Thursday</p>
                <p className='timing'>3pm-6pm</p>
                <span className='btn-book-table' onClick={booked}>Book a table</span>
            </div>
        </div>

        <div className='whatson-main-content-left'>
            <div className='main-content-content-left'>
                <p className='program'>Friday Night Live</p>
                <p className='cocktails'>John Snow</p>
                <p className='days'>July 1st, 2023</p>
                <p className='timing'>8pm onwards</p>
                <span className='btn-book-table-left' onClick={booked}>Book a table</span>
            </div>
            <img src={guySinging} alt="" />

        </div>
      
    </div>
  )
}

export default Whatson
