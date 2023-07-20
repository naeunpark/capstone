import {REACT_APP_BACKEND_API} from "./hooks/config.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import MainNav from "./componants/public/Nav.jsx";
import Header from "./componants/public/Header.jsx";
import {Col, Container, Row} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyPage() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState("");
  const userExist = JSON.parse(localStorage.getItem("session"));

  useEffect(() => {
    if (userExist) {
      axios
        .get(`${REACT_APP_BACKEND_API}/api/user/${userExist.userId}`, {
          withCredentials: true,
        })
        .then((response) => response)
        .then((json) => {
          setCurrentUser(json.data.data);
        });
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    // const avatar = document.querySelector("#avatar");

    const newUser = new FormData();
    newUser.append("email", currentUser.email);
    newUser.append("password", currentUser.password);
    newUser.append(
      "firstname",
      firstname.value ? firstname.value : currentUser.firstname,
    );
    newUser.append(
      "lastname",
      lastname.value ? lastname.value : currentUser.lastname,
    );
    // newUser.append(
    //   "avatar",
    //   avatar.files[0] ? avatar.files[0] : currentUser.avatar,
    // );

    // console.log(newUser);
    axios
      .put(`${REACT_APP_BACKEND_API}/api/user/${userExist.userId}`, newUser, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((json) => {
        if (json.result === 200) {
          console.log("sucess");
        } else if (json.result === 204) {
        }
      });
  }

  return (
    <>
      <MainNav />
      <Header name="My Page" />

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

          <Col>
            <form
              encType="multipart/form-data"
              style={{display: "flex", flexDirection: "column"}}
            >
              <input
                type="email"
                value={currentUser.email}
                className="mb-3"
                disabled
                readOnly
              />

              <input
                type="text"
                placeholder={currentUser.firstname}
                className="mb-3"
                id="firstname"
              />

              <input
                type="text"
                placeholder={currentUser.lastname}
                className="mb-3"
                id="lastname"
              />

              {/* <input
                type="file"
                className="mb-3"
                id="avatar"
              /> */}
              {/* {currentUser.avatar} */}

              <button
                className="btn"
                onClick={handleSubmit}
              >
                Change
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyPage;
