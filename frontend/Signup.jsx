import {REACT_APP_BACKEND_API} from './hooks/config.js';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/base/FormControl';
import { Input } from '@mui/base';
import axios from 'axios';
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
    const avatar = document.querySelector("#avatar");

    const newUser = new FormData();
    newUser.append("email", email.value);
    newUser.append("password", password.value);
    newUser.append("firstname", firstname.value);
    newUser.append("lastname", lastname.value);
    newUser.append("avatar", avatar.files[0]);

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
      <Container className="text-center py-5">
        <Row className="py-5">
          <Col>
            <h1>Sign up</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="py-5 text-center">
          <h2>{userExist ? `User already exists.` : ""}</h2>
          <a href="/sign-in">Sing in</a>
          <FormControl encType="multipart/form-data">
            <TextField
              type="email"
              id="email"
              label="email"
              variant="filled"
              required
            />
            <TextField
              type="password"
              id="password"
              label="password"
              variant="filled"
              required
            />
            <Input
              type="file"
              id="avatar"
              label="avatar"
              name="avatar"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              variant="filled"
            ></Input>
            <TextField
              id="firstname"
              label="firstname"
              variant="filled"
              required
            />
            <TextField
              id="lastname"
              label="lastname"
              variant="filled"
              required
            />
            <Button
              variant="contained"
              id="signin-button"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </FormControl>
        </Row>
      </Container>
    </>
  );
}

export default Signup
