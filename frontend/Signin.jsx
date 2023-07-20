import { useState } from 'react';
import {useNavigate, Link} from "react-router-dom";
import {REACT_APP_BACKEND_API} from "./hooks/config.js";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import MainNav from "./componants/public/Nav.jsx";

function Signin() {
  //showPassword
  const [showPassword, setShowPassword] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const userInfo = {
      email: email.value,
      password: password.value,
    };
    axios
      .post(`${REACT_APP_BACKEND_API}/api/auth/signin`, userInfo, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((json) => {
        if (json.result === 200) {
          // Log in Success
          const newSession = {
            sessionId: json.sessionId,
            userId: json.userId,
          };
          localStorage.setItem("session", JSON.stringify(newSession));
          navigate("/");
        } else if (json.result === 203) {
          // Wrong Password
          setAlertText("Password is wrong. Please enter correct password.");
        } else if (json.result === 204) {
          // email does not exist.
          setAlertText("User can not be found");
        }
      });
  }

  return (
    <>
      <MainNav />
      <Container className="text-center py-5">
        <Row className="pt-5">
          <Col>
            <h1>Sign in</h1>
          </Col>
        </Row>
      </Container>

      <Container className="text-center py-5">
        <Row>
          <Col>
            <h2>{alertText}</h2>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col>
            <TextField
              id="email"
              label="email"
              variant="standard"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormControl
              sx={{m: 1, width: "25ch"}}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="contained"
              id="signin-button"
              onClick={handleSubmit}
              className="btn my-3"
              style={{backgroundColor: "#BDA693"}}
            >
              Sign in
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="pb-5">
            <Link
              to="/sign-up"
              className="secondary-btn btn"
            >
              Sing up
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signin
