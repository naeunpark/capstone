import { useIsLoggedIn } from "../../hooks/isLoggedIn";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo.png';

function Header() {

  const islogin = useIsLoggedIn();
  
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="/"><Image src={logo} width={200}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={islogin? 'sign-out':'sign-in'}>{islogin? 'Sign out':'Sign in'}</Nav.Link>
            <Nav.Link href="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;