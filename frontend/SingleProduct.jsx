import {REACT_APP_BACKEND_API} from "./hooks/config.js"
import { useParams } from "react-router-dom";
import { Row, Col, Image, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import ControlledCarousel from "./componants/product/ControlledCarousel";
import Header from "./componants/public/Header.jsx";
import Container from 'react-bootstrap/Container';

function SingleProduct(){
    let { productId } = useParams();
    const [ item, setItem ] = useState('');

    useEffect(()=>{
        fetch(`${REACT_APP_BACKEND_API}/api/product/${productId}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json.data);
            setItem(json.data);
        })
    },[])

    return (
      <>
      <Header></Header>
      <Container>
        <Row className="my-4"></Row>
        <Row>
          <Col>
             {/* {item.images && <ControlledCarousel images={item.images} />}  */}
          </Col>
          <Col>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>{item.shortDescription}</p>
            <Form id="addToCart">
              <Row>
                <Col sm={6}>
                  <Form.Control
                  type="number"
                  id="qty"
                  aria-describedby="qty"
                  min="1"
                  defaultValue={1}
                  />
              </Col>
              <Col>
                  <Button id="addToCartBtn" style={{backgroundColor: "#9D7B5F", border: "none"}}>Add to Cart</Button>
              </Col>
              </Row>
            </Form>
          </Col>
        </Row> 
        </Container>
        <Container>
          <Row className="pb-5">
            <Col>
            <h3>Product Dedscription</h3>
            {item.description}
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default SingleProduct;