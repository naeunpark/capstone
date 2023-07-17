import { Container, Row, Col } from "react-bootstrap";

function Footer() {

  
  return (
    <>
      <Container
        style={{backgroundColor: "#BDA693"}}
        className="py-5"
        fluid
      >
        <Container>
          <Row>
            <Col>
              <p>copyright@all rights are reserved.</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;