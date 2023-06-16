import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Navbar({ handleClick }) {

  function booked(){
    alert('Please Scroll Down and book your table')
  }

  return (
    <div className='container'>
      <div className='header'>
        <FontAwesomeIcon style={{ color: 'gold' }} className='font-awesome-icon' icon={faBacon} />
        <h2 className='naming'>Flavour<sub>Fusion</sub></h2>
        <div className='nav-icons'>
          <ul>
            <li><Link to="/" >What's On</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/" >Book a Table</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="square-container">
        <div className="square">
          <FontAwesomeIcon style={{ color: 'gold' }} className='square-font-awesome-icon' icon={faBacon} />
          <h2 className='naming'>Flavour<sub>Fusion</sub></h2>
          <p style={{ color: 'white', marginTop: '7%', fontSize: '20px' }}>Unite Flavors, Delight Senses</p>
          <span className='btn-book-table' onClick={booked}>Book a table</span>
          <hr />
          <p className='address-rest'>Flavour Fusion 456 Oak Avenue Riverside, CA 98765</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
