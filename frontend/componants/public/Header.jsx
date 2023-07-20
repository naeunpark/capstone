import {Col, Container, Row} from "react-bootstrap";
import bedroom from "../../assets/bedroom.jpg";

function Header(props) {
  return (
    <>
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
            <h1>{props.name}</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
