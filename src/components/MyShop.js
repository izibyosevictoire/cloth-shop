import React  from 'react';
import list from './Products';
import '../styles.css/myShop.css';
import Cards from './Cards';
import { Modal,Button } from 'react-bootstrap';

import AddNewProduct from './AddNewProduct';


const MyShop = (props) => {
  return(
    <section>

<Modal show={props.show}>
    <Modal.Header>
        <Modal.Title>
            Add New product
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <AddNewProduct />
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={()=>props.setShow(false)} variant="secondary">
            Close Button
        </Button>
    </Modal.Footer>
   </Modal>
        {
            list.map(( item ) => (
                <Cards  item={item} />
            ))
         }
    </section>
    

  )
}
export default MyShop