import React, { useState } from 'react';
import '../styles.css/navbar.css';
import { Modal, Button } from 'react-bootstrap';


const Navbar = (props, { size }) => {

  const handleShow = () => props.setShow(true);
  const handleClose = () => props.setShow(false);
  return (
    <>
      <nav>
        <div className='nav-box'>
          <span className='online-shopping'>
            cloth Shop.com
          </span>
          <div className='cart'>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>

            <span>{size}</span>
          </div>
        </div>
        <span>
          <Button className='add-btn' onClick={handleShow}>
            Add product</Button>
        </span>

      </nav>
    </>


  )
}
export default Navbar