import { useState } from 'react'
import {Col, Container, Row, Button, Form, InputGroup} from "react-bootstrap";
import bedroom from "./assets/bedroom.jpg";
import Header from "./componants/public/Header.jsx";
import {Link} from "react-router-dom";

function Checkout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container
        style={{
          backgroundImage: `url(${bedroom}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="text-center py-5"
        fluid
      >
        <Row className="py-5">
          <Col>
            <h1>Check out</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="py-5">
          <Col
            sm={12}
            md={6}
          >
            <h2>Billing detalis</h2>
            <Row>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="First name"
                  placeholder="First name"
                />
                <Form.Control
                  aria-label="Last name"
                  placeholder="Last name"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Contry/Region"
                  placeholder="Contry/Region"
                />
                <Form.Control
                  aria-label="Address"
                  placeholder="Address"
                />
                <Form.Control
                  aria-label="Zip code"
                  placeholder="Zip code"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Contact"
                  placeholder="Contact"
                />
              </InputGroup>
            </Row>
          </Col>
          <Col
            sm={12}
            md={6}
          ></Col>
        </Row>
      </Container>

      <Container>
        <Row className="py-5">
          <Link
            id="checkOut"
            className="btn"
            to="/order"
            style={{backgroundColor: "#9D7B5F", border: "none"}}
          >
            Place an order
          </Link>
        </Row>
      </Container>
    </>
  );
}

export default Checkout
