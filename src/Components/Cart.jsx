import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {remove} from '../Store/CartSlice';

const Cart = () => {

  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    //Dispatch an add action
    dispatch(remove(id))
  }


  const cards = products.map(product => (
    <div className="col-md-12" style={{ marginBottom: '0.5rem'}}>
      <Card key={product.id} className="h-100">
       <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{width: '6rem' , height: '8rem'}} />
       </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           $: {product.price}
          </Card.Text>
        </Card.Body>

          <Card.Footer style={{ background: 'white' }}>
            <Button variant="danger" onClick={()=> removeToCart(product.id)} >Remove Item</Button>
          </Card.Footer>
        </Card>

    </div>
  ))

  return (
    <div>
      <h2>Cart Items</h2>
        <div className="row">
        {cards}
        </div>
    </div>
  )
}

export default Cart