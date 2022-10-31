import { Modal,Button } from 'react-bootstrap';
import React  from 'react';
import '../styles.css/cards.css'
import AddNewProduct from './AddNewProduct';
import Navbar from './Navbar';

const Cards = ({item}) => {
    const {productName,storeName,price,category,date,img,description,status} = item;
  return(
    <>
   <div className='cards'>
    <div className='image-box'>
        <img src={img} alt="image" />
    </div>
    <div className='details'>
        <div>
        <p> {productName}</p>
        <p> {storeName}</p>
        <p> {price}</p>
        <p> {category}</p>
        <p> {date}</p>
        <p>{description}</p>
        <p> {status}</p>
        
        <button>Add to cart</button>
        </div>

    </div>
   </div>

   </>

  )
}
export default Cards