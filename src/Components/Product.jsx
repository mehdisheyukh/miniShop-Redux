import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from '../Store/CartSlice';
import { getProducts } from '../Store/ProductSlice';
import { Alert } from "react-bootstrap";
import StatusCode from '../utils/StatusCode';

const Product = () => {

  const dispatch = useDispatch();

  const {data: products , status} = useSelector(state => state.products);

  useEffect(() => {

    //dispatch an action for fetchProducts
    dispatch(getProducts());

    // api
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, []);


  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR) {
    return <Alert variant="danger">Something went wrong! Try again later</Alert>
  }


  const addToCart = (product) => {
    //Dispatch an add action
    dispatch(add(product))
  }

  // get current date
  


  const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBottom: '0.5rem'}}>
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
            <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
        </Card>

    </div>
  ))

  return (
    <>
      <h1>Product Dashbord</h1>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Product;
