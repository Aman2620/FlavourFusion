import React from 'react';
import './menu.css';
import MenuItems from '../menudata';
import Menu from './menu';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon } from '@fortawesome/free-solid-svg-icons';

function Displaymenu() {
  return (
    <>
    <div className='heading-image'>
      <div className='header'>
      <FontAwesomeIcon style={{color:"gold"}} className='font-awesome-icon' icon={faBacon} />
      <h2 className='naming'>Flavour<sub>Fusion</sub></h2>
      <div className='nav-icons'>
        <ul>
            <li><a href="/">What's On</a></li>
            <li><a href="#/menu">Menu</a></li>
            <li><a href="/">Book a Table</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </div>
    </div>
    <div>
      <div className='menu-title'>
        <h1><b>Menu</b></h1>
      </div>
      {MenuItems.map(category => (
        <Menu
          heading={category.heading}
          items={category.items}
        />
      ))}
    </div>
    </>
  );
}

export default Displaymenu;

