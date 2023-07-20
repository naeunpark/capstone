import {useState, useEffect} from "react";
import ProductTable from "./ProductTable.jsx";
import {Col, Container, Row, Button} from "react-bootstrap";

function CartTable(props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let getTotalPrice = 0;

    props.cartItems.forEach((item) => {
      getTotalPrice += item.qty * item.product.price;
      setTotal(getTotalPrice);
    });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Container className="p-5 cart-table">
              <Row>
                {props.remove ? <Col></Col> : null}
                <Col>Product</Col>
                <Col>Unit Price</Col>
                <Col>Qty</Col>
                <Col>Sub Total</Col>
              </Row>
              {props.cartItems !== []
                ? props.cartItems.map((item) => (
                    <ProductTable
                      key={item.id}
                      product={item}
                      remove={props.remove}
                    />
                  ))
                : ""}
              <Row
                style={{textAlign: "right"}}
                className="p-3"
              >
                <Col sm={10}>Total</Col>
                <Col sm={2}>$ {total}</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CartTable;
