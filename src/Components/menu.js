import React from 'react'
import './menu.css'

function Menu(props) {
  return (
    <div className='menu-container'>
      <div className='heading-name'>
        <hr />
        <p>{props.heading}</p>
        <hr />
      </div>
      <div className='menu-items'>
        {props.items.map(item => (
          <React.Fragment>
            <div className="item-info">
              <div className="item-name">{item.title}</div>
              <div className="item-price">{item.price}</div>
            </div>
            <div className='item-description'>{item.description}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default Menu;
