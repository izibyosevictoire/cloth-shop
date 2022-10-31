import { Form, Button, FormControl, FormLabel } from 'react-bootstrap';

const AddNewProduct = () =>{
    return(
        
        <Form>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="productName"
                    
                />
            </Form.Group><br/>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="storeName"
                    
                />
            </Form.Group><br/>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="price"
                   
                />
            </Form.Group><br/>
            <Form.Group> 
                <label>Category:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>slays</option>
                    <option value="1">girls</option>
                    <option value="2">boys</option>
                    <option value="3">women</option>
                  </select>
            </Form.Group><br/>
            <Form.Group>
                <Form.Control 
                    type="date"
                    placeholder="date"
                   
                />
            </Form.Group><br/>
            <Form.Group>
                <Form.Control 
                    as="textarea"
                    placeholder="description"
                   
                />
            </Form.Group><br/>
            <Form.Group>
               <Form.Label>Status:</Form.Label><br/>
               <Form.Check name='status' label="in stock" inline type='radio'/>
               <Form.Check name='status' label="temporary in stock" inline type='radio'/>
               <Form.Check name='status' label="not available" inline type='radio'/>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control
                    type="file"
                    placeholder="picture"

                />

            </Form.Group><br/>
            <Button variant="success" type="submit" block>
                Add New Product
            </Button>
        </Form>

    )
}

export default AddNewProduct