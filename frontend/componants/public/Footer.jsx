import { Container, Row, Col } from "react-bootstrap";

function Footer() {

  
  return (
    <>
      <Container style={{backgroundColor:"#BDA693"}} className="py-5" fluid>
        <Row>
          <Col>
            <p>copyright@all rights are reserved.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer;