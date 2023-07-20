import Header from "./componants/public/Header.jsx";
import {Col, Container, Row} from "react-bootstrap";
import bedroom from "./assets/bedroom.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MainNav from "./componants/public/Nav.jsx";

function Contacts() {
  return (
    <>
      <MainNav />
      <Header name="Contacts" />
      <Container>
        <Row>
          <Col className="text-center pt-5 pb-2">
            <h2>Get In Touch With Us</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="w-100 py-5">
              <iframe
                className="w-100"
                height={600}
                frameborder={0}
                marginheight={0}
                marginwidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Taharoto%20Park%20Takapuna,%20Auckland%200622,%20New%20Zealand+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href={`https://www.maps.ie/population/`}>
                  Population calculator map
                </a>
              </iframe>
            </div>
          </Col>
          <Col className="text-center my-5">
            <Row className="my-5">
              <Col>
                <h5>
                  <AccessTimeIcon></AccessTimeIcon> Working Hour
                </h5>
                <li>Monday-Friday: 9:00 - 19:00</li>
                <li>Saturday-Sunday: 9:00 - 19:00</li>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <h5>
                  <HomeIcon></HomeIcon> Address
                </h5>
                <p>Taharoto Rd, Takapuna, Auckland 0620</p>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <h5>
                  <PhoneInTalkIcon></PhoneInTalkIcon> Contacts
                </h5>
                <li>Phone: +64 0800 5000</li>
                <li>E-mail: contact@furnistone.com</li>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contacts;
