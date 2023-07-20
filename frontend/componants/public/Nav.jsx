import {useIsLoggedIn} from "../../hooks/isLoggedIn";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import {
  BsBoxArrowInRight,
  BsBoxArrowRight,
  BsFillCartFill,
  BsPersonSquare,
} from "react-icons/bs";

function MainNav() {
  const islogin = useIsLoggedIn();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=""
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              width={200}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href={islogin ? "/my-page" : ""}>
                {islogin ? <BsPersonSquare /> : ""}
              </Nav.Link>
              <Nav.Link href={islogin ? "/sign-out" : "/sign-in"}>
                {islogin ? <BsBoxArrowRight /> : <BsBoxArrowInRight />}
              </Nav.Link>
              <Nav.Link href="/cart">
                <BsFillCartFill />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNav;
