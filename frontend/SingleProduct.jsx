import {REACT_APP_BACKEND_API} from "./hooks/config.js"
import { useParams } from "react-router-dom";
import { Row, Col, Image, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import ControlledCarousel from "./componants/product/ControlledCarousel";
import Header from "./componants/public/Nav.jsx";
import Container from "react-bootstrap/Container";
import axios from "axios";
import sofa from "./assets/leather-sofa.jpg";

function SingleProduct() {
  let {productId} = useParams();
  const [item, setItem] = useState("");
  const [cartId, setCartId] = useState("");

  useEffect(() => {
    fetch(`${REACT_APP_BACKEND_API}/api/product/${productId}`, {
      withCredentials: true,
    })
      .then((response) => response.json())
      .then((json) => {
        setItem(json.data);
      });
  }, []);

  function handleSubmit(e) {
    const qty = document.querySelector("#qty").value;
    const session = JSON.parse(localStorage.getItem("session"));
    axios
      .post(
        `${REACT_APP_BACKEND_API}/api/cart/create`,
        {
          userId: session.userId,
        },
        {withCredentials: true},
      )
      .then((response) => {
        setCartId(response.data.data[0].id);
      });

    if (cartId !== "") {
      axios
        .post(
          `${REACT_APP_BACKEND_API}/api/cart/item/create`,
          {
            userId: session.userId,
            productId: productId,
            cartId: cartId,
            qty: qty,
          },
          {withCredentials: true},
        )
        .then((response) => console.log(response.data))
        .then(() => {
          alert("Product ordered sucessfully!");
        })
        .catch((error) => {
          throw error.message;
        });
    }
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Row className="my-4"></Row>
        <Row>
          <Col>
            {/* {item.images && <ControlledCarousel images={item.images} />} */}
            <img
              src={sofa}
              className="w-100"
            />
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
                  <Button
                    id="addToCartBtn"
                    style={{backgroundColor: "#9D7B5F", border: "none"}}
                    onClick={handleSubmit}
                  >
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="py-5">
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