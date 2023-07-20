import {REACT_APP_BACKEND_API} from './hooks/config.js';
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/base/FormControl";
import {Input} from "@mui/base";
import axios from "axios";
import MainNav from "./componants/public/Nav.jsx";
import {Col, Container, Row} from "react-bootstrap";

function Signup() {
  const [userExist, setUserExist] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    // const avatar = document.querySelector("#avatar");

    const newUser = new FormData();
    newUser.append("email", email.value);
    newUser.append("password", password.value);
    newUser.append("firstname", firstname.value);
    newUser.append("lastname", lastname.value);
    // newUser.append("avatar", avatar.files[0]);

    axios
      .post(`${REACT_APP_BACKEND_API}/api/auth/signup`, newUser)
      .then((response) => response.data)
      .then((json) => {
        if (json.result === 200) {
          // Sign up Success
          navigate("/sign-in");
        } else if (json.result === 204) {
          // User exists.
          setUserExist(true);
        }
      });
  }

  return (
    <>
      <MainNav />
      <Container className="text-center pt-5 pb-2">
        <Row className="pt-5 pb-3">
          <Col>
            <h1>Sign up</h1>
          </Col>
        </Row>
      </Container>

      <Container className="text-center py-3">
        <Row className="pb-2 text-center">
          <Col>
            <h2>{userExist ? `User already exists.` : ""}</h2>
          </Col>
        </Row>
        <FormControl encType="multipart/form-data">
          <Row className="py-3">
            <Col>
              <TextField
                type="email"
                id="email"
                label="email"
                variant="filled"
                required
              />
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <TextField
                type="password"
                id="password"
                label="password"
                variant="filled"
                required
              />
            </Col>
          </Row>
          {/* <Row className="py-3">
            <Col>
              <Input
                type="file"
                id="avatar"
                label="avatar"
                name="avatar"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                variant="filled"
              ></Input>
            </Col>
          </Row> */}
          <Row className="py-3">
            <Col>
              <TextField
                id="firstname"
                label="firstname"
                variant="filled"
                required
              />
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <TextField
                id="lastname"
                label="lastname"
                variant="filled"
                required
              />
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <Button
                variant="contained"
                id="signin-button"
                onClick={handleSubmit}
                style={{backgroundColor: "#BDA693"}}
              >
                Sign up
              </Button>

              <Link
                href="/sign-in"
                className="secondary-btn p-2 m-3 css-sghohy-MuiButtonBase-root-MuiButton-root"
                style={{backgroundColor: "#9E7F66"}}
              >
                Sign in
              </Link>
            </Col>
          </Row>
        </FormControl>
      </Container>
    </>
  );
}

export default Signup
