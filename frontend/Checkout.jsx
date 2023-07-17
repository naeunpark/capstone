import { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import bedroom from './assets/bedroom.jpg'
import Header from './componants/public/Header.jsx'
import { Link } from 'react-router-dom';

function Checkout() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Container style={{backgroundImage: `url(${bedroom}`, backgroundPosition: 'center', backgroundSize:'cover' }} className='text-center py-5' fluid>
        <Row className='py-5'>
          <Col>
            <h1>Check out</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>

        </Row>
      </Container>

      <Container>
        <Row className='py-5'>
          <Link id="checkOut" to="/order" style={{backgroundColor: "#9D7B5F", border: "none"}}>Place an order</Link>
        </Row>
      </Container>

    </>
  )
}

export default Checkout
