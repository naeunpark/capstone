import {Col, Container, Row, Form, InputGroup} from "react-bootstrap";
import Header from "./componants/public/Header";
import MainNav from "./componants/public/Nav";
import GetCartItmes from "./hooks/GetCartItmes";
import CartTable from "./componants/product/CartTable.jsx";
import axios from "axios";
import {REACT_APP_BACKEND_API} from "./hooks/config";
import {useNavigate} from "react-router-dom";

function Checkout() {
  const cartItems = GetCartItmes();
  const cartId = localStorage.getItem("cartId");
  const user = JSON.parse(localStorage.getItem("session"));
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const country = document.querySelector("#country").value;
    const address = document.querySelector("#address").value;
    const postcode = document.querySelector("#postcode").value;
    const contact = document.querySelector("#contact").value;

    const newOrder = {
      firstName: firstName,
      lastName: lastName,
      address: `${address} ${country} ${postcode}`,
      contact: contact,
      orderStatus: "Ordered",
      userId: user.userId,
    };

    axios
      .post(`${REACT_APP_BACKEND_API}/api/order/create`, newOrder, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((data) => {
        if (data.result === 200) {
          cartItems.forEach((item) => {
            const orderingItem = {
              userId: user.userId,
              productId: item.productId,
              orderId: data.data.id,
              qty: item.qty,
            };

            axios
              .post(
                `${REACT_APP_BACKEND_API}/api/order/item/create`,
                orderingItem,
                {withCredentials: true},
              )
              .then((response) => response.data)
              .then((data) => {
                if (data.result === 200) {
                  axios
                    .put(
                      `${REACT_APP_BACKEND_API}/api/cart/${cartId}`,
                      {
                        active: false,
                      },
                      {withCredentials: true},
                    )
                    .then((response) => response.data.result)
                    .then((result) => {
                      if (result === 200) {
                        localStorage.removeItem("cartId");
                      }
                    })
                    .then(() => {
                      navigate("/order/");
                    });
                }
              });
          });
        }
      });
  }

  return (
    <>
      <MainNav />
      <Header name="Check out" />

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
                  id="firstname"
                />
                <Form.Control
                  aria-label="Last name"
                  placeholder="Last name"
                  id="lastname"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Contry/Region"
                  placeholder="Contry/Region"
                  id="country"
                />
                <Form.Control
                  aria-label="Address"
                  placeholder="Address"
                  id="address"
                />
                <Form.Control
                  aria-label="Zip code"
                  placeholder="Zip code"
                  id="postcode"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Contact"
                  placeholder="Contact"
                  id="contact"
                />
              </InputGroup>
            </Row>
          </Col>

          <Col
            sm={12}
            md={6}
          >
            {cartItems == [] ? (
              <Row>
                <Col className="p-5">
                  Cart is empty. Go back to the <a href="/shop">Shop</a>
                </Col>
              </Row>
            ) : (
              <CartTable
                cartItems={cartItems}
                remove={false}
              />
            )}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="py-5">
          <button
            type="submit"
            className="btn"
            style={{backgroundColor: "#9D7B5F", border: "none"}}
            onClick={handleSubmit}
          >
            Place an order
          </button>
        </Row>
      </Container>
    </>
  );
}

export default Checkout;
