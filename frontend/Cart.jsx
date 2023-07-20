import {Link} from "react-router-dom";
import Header from "./componants/public/Header";
import MainNav from "./componants/public/Nav";
import CartTable from "./componants/product/CartTable";
import {Container, Row, Col} from "react-bootstrap";
import GetCartItmes from "./hooks/GetCartItmes";

function Cart() {
  const cartItems = GetCartItmes();

  return (
    <>
      <MainNav />
      <Header name="Cart" />
      <Container>
        {cartItems == [] ? (
          <Row>
            <Col className="p-5">
              Cart is empty. Go back to the <a href="/shop">Shop</a>
            </Col>
          </Row>
        ) : (
          <>
            <CartTable
              cartItems={cartItems}
              remove={true}
            />
            <Container>
              <Row className="py-5">
                <Link
                  id="checkOut"
                  className="btn"
                  to="/checkout"
                >
                  Check out
                </Link>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default Cart;
