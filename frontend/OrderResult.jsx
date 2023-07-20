import Header from "./componants/public/Header";
import MainNav from "./componants/public/Nav";
import {Container, Row, Col} from "react-bootstrap";

function OrderResult() {
  return (
    <>
      <MainNav />
      <Header name="Order" />
      <Container>
        <Row>
          <Col className="p-5">
            Order Succeed. Go back to the <a href="/shop">Shop</a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OrderResult;
