import {useEffect, useState} from "react";
import Header from "./componants/public/Header";
import MainNav from "./componants/public/Nav";
import {Container, Row, Col, Navbar, Nav} from "react-bootstrap";
import axios from "axios";
import {REACT_APP_BACKEND_API} from "./hooks/config";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  let userExist = localStorage.getItem("session");
  userExist = JSON.parse(userExist);

  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_API}/api/order/${userExist.userId}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((data) => {
        if (data.result === 200) {
          setOrders(data.data);
        }
      });
  }, []);

  return (
    <>
      <MainNav />
      <Header name="My Orders" />
      <Container className="py-5">
        <Row>
          <Col md={2}>
            <Navbar className="">
              <Container>
                <Nav
                  className="me-auto"
                  style={{flexDirection: "column"}}
                >
                  <Nav.Link href="/my-page">Profile</Nav.Link>
                  <Nav.Link href={`/my-page/orders`}>Orders</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>

          <Col className="p-5">
            <Row className="order-table-header p-3">
              <Col>Order Number</Col>
              <Col>Date</Col>
              <Col>Status</Col>
            </Row>
            {orders.map((order) => (
              <Row
                key={order.id}
                className="order-table-item p-3"
              >
                <Col>{order.id}</Col>
                <Col>{order.createdAt}</Col>
                <Col>{order.orderStatus}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OrderHistory;
