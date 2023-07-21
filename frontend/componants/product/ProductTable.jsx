import * as React from "react";
import {REACT_APP_BACKEND_API} from "../../hooks/config.js";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {BsXSquare} from "react-icons/bs";
import axios from "axios";

export default function ProductTable(props) {
  const cartProduct = props.product;

  function handleRemove(product) {
    axios
      .delete(`${REACT_APP_BACKEND_API}/api/cart/item/${cartProduct.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.result === 200) {
          alert(response.data.msg);
          window.location.href = "/cart";
        }
      });
  }

  return (
    <>
      <Row className="order-table-item p-3">
        {props.remove ? (
          <Col>
            <BsXSquare
              onClick={() => {
                handleRemove(cartProduct);
              }}
            />
          </Col>
        ) : null}
        <Col>
          <Link to={`/shop/${cartProduct.product.id}`}>
            {cartProduct.product.name}
          </Link>
        </Col>
        <Col>$ {cartProduct.product.price}</Col>
        <Col>{cartProduct.qty}</Col>
        <Col style={{textAlign: "right"}}>
          $ {cartProduct.product.price * cartProduct.qty}
        </Col>
      </Row>
    </>
  );
}
