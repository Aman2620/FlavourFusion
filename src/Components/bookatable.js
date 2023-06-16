import React from 'react'
import './booktable.css'

function Bookatable() {

  function bookTable(){
    alert('Table Booked')
  }
  return (
    <div className='table-container'  id='table-cont'>
      <h1 style={{color:"white" ,padding:"20px",marginLeft:'auto',marginRight:'auto'}}>Reserve a table</h1>
      <div className='table-booking'>
        <div className="guest-booking">
        <p style={{color:"white",padding:"10px",fontSize:"25px"}}>Guests: </p>
      <select name="guests" className='custom-select'>
        <option value="1">1 Guest</option>
        <option value="2" selected>2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4 Guests</option>
        <option value="5">5 Guests</option>
        <option value="6">6 Guests</option>
      </select>
      </div>
      <div className="time-booking">
        <p style={{color:"white",padding:"10px",fontSize:"25px"}}>Time: </p>
      <select name="time" className='custom-select'>
        <option value="1">12:00 PM</option>
        <option value="2" selected>1:00 PM</option>
        <option value="3">1:30 PM</option>
        <option value="4">2:00 PM</option>
        <option value="5">2:30 PM</option>
        <option value="6">3:00 PM</option>
        <option value="7">3:30 PM</option>
        <option value="8">4:00 PM</option>
        <option value="9">4:30 PM</option>
        <option value="10">5:00 PM</option>
        <option value="11">5:30 PM</option>
      </select>
      </div>

    </div>
    <span className='btn-book-table-reserve' onClick={bookTable}>Confirm Booking</span>

    </div>
  )
}

export default Bookatable
